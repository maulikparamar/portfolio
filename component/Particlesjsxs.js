import Particles from 'react-tsparticles';

const Particlesjsxs = () => {
    const particlesLoaded = (e) => {
        // console.log(e);
    };
    const particlesInit = (e) => {
        // console.log(e);
    };
    const option = {
        background: {
            color: {
                value: '#ffffff'
            }
        },
        fpsLimit: 60,
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onClick: {
                    enable: true,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                },
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: {
                value: '#000000'
            },
            links: {
                color: '#000000',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions: {
                enable: true
            },
            move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: true,
                speed: 6,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: 'circle'
            },
            size: {
                random: true,
                value: 5
            }
        },
        detectRetina: true
    };
    return (
        <Particles
            className="w-full h-screen absolute top-0 z-10"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={option}
        />
    );
};

export default Particlesjsxs;
