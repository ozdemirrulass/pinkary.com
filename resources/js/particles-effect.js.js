const particlesEffect = () => ({

    config: {
        // Color
        colorPalette: Math.random() * 30 + 330, // Pink
        percentageColorSaturationInPercent: 70,
        luminosityPercentageColorInPercent: 60,

        // Particles
        numberOfParticles: 20,
        minParticleSizeInPx: 2,
        maxParticleSizeInPx: 10,

        // Animation
        minAnimationDurationInMs: 500,
        maxAnimationDurationInMs: 1000,
        particleAnimationDelayInMs: 200,
        explosionEffectRangeInPx: 60,
    },

    executeParticlesEffect(e) {
        // Only when button click is with mouse/finger
        if (e.clientX !== 0 || e.clientY !== 0) {

            for (let iParticle = 0; iParticle < this.config.numberOfParticles; iParticle++) {
                // Coordinates of the mouse/finger
                let x = e.clientX,
                    y = e.clientY

                const particle = document.createElement('particleEffect')
                document.body.appendChild(particle)

                // Calculate a random size
                const size = Math.floor(Math.random() * this.config.maxParticleSizeInPx + this.config.minParticleSizeInPx)
                particle.style.width = `${size}px`
                particle.style.height = `${size}px`

                // Random color within the configured color palette
                particle.style.background = `hsl(
                    ${this.config.colorPalette},
                    ${this.config.percentageColorSaturationInPercent}%,
                    ${this.config.luminosityPercentageColorInPercent}%
                )`

                const particleAnimation = particle.animate([
                    // Origin position of the particle, in the center of the click
                    {
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                        opacity: 1
                    },
                    // Final position
                    {
                        transform: `translate(
                            ${x + (Math.random() - 0.5) * 2 * this.config.explosionEffectRangeInPx}px,
                            ${y + (Math.random() - 0.5) * 2 * this.config.explosionEffectRangeInPx}px
                        )`,
                        opacity: 0
                    }
                ], {
                    duration: Math.random() * this.config.maxAnimationDurationInMs + this.config.minAnimationDurationInMs,
                    easing: 'cubic-bezier(0, .9, .57, 1)',
                    delay: Math.random() * this.config.particleAnimationDelayInMs
                })

                particleAnimation.onfinish = () => {
                    particle.remove()
                }
            }
        }
    }
})

export { particlesEffect }