"use client"
// import Image from "next/image";
import { useSkipStore } from '@/utils/store/skipStore'
import { Card, CardContent, CardMedia, Button, Typography, useTheme, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'


const SelectSkipRegion = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const { 
        skips, 
        selectedSkip,
        bestSkip,
        setSkips,
        setSelectedSkip,
        setBestSkip 
    } = useSkipStore()

    // In order to understand the size of the selected yard, appropriate images corresponding to the selected yard are provided.
    const imageMap = {
        4: 'https://skiphirecomparison.co.uk/wp-content/uploads/2016/09/skip-hire-comparison-4yd-1.jpg',
        5: 'https://exmoorskiphire.co.uk/wp-content/uploads/2017/02/5-skips.jpg',
        6: 'https://skiphirecomparison.co.uk/wp-content/uploads/2016/09/skip-hire-comparison-6yd.jpg',
        8: 'https://skiphirecomparison.co.uk/wp-content/uploads/2016/09/skip-hire-comparison-8yd.jpg',
        10: 'https://skiphirecomparison.co.uk/wp-content/uploads/2016/09/skip-hire-comparison-10yd-2.jpg',
        12: 'https://skiphirecomparison.co.uk/wp-content/uploads/2016/09/skip-hire-comparison-12yd.jpg',
        14: 'https://www.alphaskiphire.co.uk/wp-content/uploads/2020/03/14yd_skip.jpg',
        16: 'https://skiphirecomparison.co.uk/wp-content/uploads/2016/09/skip-hire-comparison-16yd.jpg',
        18: 'https://www.skip-rental.co.uk/wp-content/uploads/2017/07/18yardskiphire-1.jpg',
        20: 'https://skiphirecomparison.co.uk/wp-content/uploads/2022/05/SHC-20yd-RoRo.jpg',
        40: 'https://skiphirecomparison.co.uk/wp-content/uploads/2022/05/SHC-40yd-RoRo.jpg',
    };

    useEffect(() => {
        // Fetch skips data on component mount
        const fetchSkips = async () => {
            try {
                const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
                const skipsData = await response.json()
                setSkips(skipsData)
                
                // Automatically select the most suitable skip
                const determineBestSkip = () => {
                    const size8Skip = skipsData.find(skip => skip.size === 8)
                    if (size8Skip) return size8Skip
                    
                    // If there is no 8 yard skip, choose the one closest to it
                    const largerSkips = skipsData.filter(skip => skip.size > 8)
                    if (largerSkips.length > 0) {
                        return largerSkips.sort((a, b) => a.size - b.size)[0]
                    }
                    
                    // If no larger skips, default to the largest available skip.
                    return skipsData.sort((a, b) => b.size - a.size)[0]
                }

                
                // Show the best skip option selected
                const best = determineBestSkip()
                setBestSkip(best)
                setSelectedSkip(best)
            } catch (error) {
                console.error('Failed to get data:', error)
            }
        }

        fetchSkips()
    }, [])

    const handleSkipSizeSelect = (size) => {
        const selected = skips.find(skip => skip.size === size)
        if (selected) {
            setSelectedSkip(selected)
        }// Updates selected skip in global state
    }

    return (
        <div className="px-4 md:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
            <p className="text-gray-400 text-center mb-4 md:mb-8 text-sm md:text-base">
                Select the skip size that best suits your needs
            </p>
            {/* Card component to display skip options, including the selected skip and other available sizes */}
            <Card 
                sx={{ 
                    display: "flex", 
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: '#1C1C1C', 
                    borderRadius: "0.5rem",
                    overflow: 'hidden'
                }}
            >
                <CardMedia
                    component="img"
                    alt="Skip Image"
                    src={selectedSkip && imageMap[selectedSkip.size]}
                    sx={{
                        width: { xs: '100%', md: '30%' },
                        height: isMobile ? 200 : 'auto',
                        objectFit: 'cover',
                        borderRadius: { xs: '0.5rem 0.5rem 0 0', md: '0.5rem 0 0 0.5rem' }
                    }}
                />

                <CardContent sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
                    <div className="flex flex-wrap gap-2">
                        {skips.map((skip) => (
                            // Button to select a skip size. It changes appearance based on whether the skip is selected or not.
                            <Button
                                key={skip.id}
                                variant={selectedSkip?.size === skip.size ? 'contained' : 'outlined'}
                                onClick={() => handleSkipSizeSelect(skip.size)}
                                sx={{
                                    flex: { xs: '1 1 45%', md: '0 0 auto' },
                                    minWidth: { xs: 'unset', md: 100 },
                                    maxWidth: { xs: 'none', md: 100 },
                                    py: { xs: 1, md: 1.5 },
                                    fontSize: { xs: '0.75rem',  },
                                    '&.MuiButton-contained': {
                                        color: 'rgb(255 255 255)',
                                    },
                                    fontWeight: bestSkip?.size === skip.size ? 'bold' : 'normal',
                                    backgroundColor:
                                        selectedSkip?.size === skip.size && bestSkip?.size === skip.size
                                            ? '#ffeb3b'
                                            : undefined,
                                    '&:hover': {
                                        backgroundColor:
                                            selectedSkip?.size === skip.size && bestSkip?.size === skip.size
                                                ? '#fdd835'
                                                : undefined,
                                    },
                                }}
                            >
                                {skip.size} Yard
                                {/* Highlight best recommended option */}
                                {bestSkip?.size === skip.size && ' ★'}
                            </Button>
                        ))}
                    </div>

                    {/* Dynamic content display based on selection */}
                    {selectedSkip ? (
                        <div className="mt-4">
                            <Typography variant="body1" sx={{ color: 'rgb(255 255 255)', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                Hire Period: {selectedSkip.hire_period_days} Days
                            </Typography>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: 'rgb(255 255 255)', 
                                    mt: 1,
                                    fontSize: { xs: '1rem', md: '1.5rem' },
                                    fontWeight: 'bold'
                                }}
                            >
                                Per Week: {selectedSkip.price_before_vat 
                                    ? <span style={{ color: '#0037C1' }}>£{selectedSkip.price_before_vat}</span> 
                                    : 'Contact for price information'}
                            </Typography>

                            <div className="mt-3">
                                <Typography variant="body2" sx={{
                                    color: 'rgb(255 255 255)',
                                    fontSize: { xs: '0.75rem', md: '1rem' }
                                }}>
                                    {selectedSkip.allowed_on_road ? '✅ Allowed on road' : '❌ Not allowed on road'}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: 'rgb(255 255 255)',
                                    fontSize: { xs: '0.75rem', md: '1rem' }
                                }}>
                                    {selectedSkip.allows_heavy_waste ? '✅ Allowed heavy waste' : '❌ Not allowed heavy waste'}
                                </Typography>
                            </div>
                        </div>
                    ) : (
                        <Typography variant="body1" sx={{ 
                            color: 'rgb(255 255 255)', 
                            mt: 2,
                            fontSize: { xs: '0.875rem', md: '1rem' }
                        }}>
                            Please select a yard size
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}


export default SelectSkipRegion