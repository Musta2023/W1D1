        // Solar system data with planets and their moons
        const solarSystem = [
            {
                name: "Mercury",
                color: "#8C7853",
                moons: []
            },
            {
                name: "Venus",
                color: "#FFC649",
                moons: []
            },
            {
                name: "Earth",
                color: "#6B93D6",
                moons: ["Moon"]
            },
            {
                name: "Mars",
                color: "#CD5C5C",
                moons: ["Phobos", "Deimos"]
            },
            {
                name: "Jupiter",
                color: "#D8CA9D",
                moons: ["Io", "Europa", "Ganymede", "Callisto"]
            },
            {
                name: "Saturn",
                color: "#FAD5A5",
                moons: ["Titan", "Enceladus", "Mimas"]
            },
            {
                name: "Uranus",
                color: "#4FD0E7",
                moons: ["Miranda", "Ariel"]
            },
            {
                name: "Neptune",
                color: "#4B70DD",
                moons: ["Triton"]
            }
        ];

        // Function to create a planet element
        function createPlanet(planetData) {
            const planetDiv = document.createElement('div');
            planetDiv.className = 'planet';
            planetDiv.style.backgroundColor = planetData.color;
            planetDiv.style.margin = '20px';
            planetDiv.style.display = 'inline-block';
            planetDiv.innerHTML = `<h3 style="color: white; margin: 0; font-size: 14px;">${planetData.name}</h3>`;
            
            return planetDiv;
        }

        // Function to create a moon element
        function createMoon(moonName, index, totalMoons) {
            const moonDiv = document.createElement('div');
            moonDiv.className = 'moon';
            moonDiv.title = moonName; // Tooltip to show moon name
            
            // Position moons in a circle around the planet
            const angle = (360 / totalMoons) * index;
            const radius = 60; // Distance from planet center
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            moonDiv.style.left = `${50 + x}px`;
            moonDiv.style.top = `${50 + y}px`;
            
            return moonDiv;
        }

        // Function to build the solar system
        function buildSolarSystem() {
            const container = document.querySelector('.listPlanets');
            
            solarSystem.forEach(planetData => {
                // Create planet
                const planet = createPlanet(planetData);
                
                // Add moons if the planet has any
                if (planetData.moons.length > 0) {
                    planetData.moons.forEach((moonName, index) => {
                        const moon = createMoon(moonName, index, planetData.moons.length);
                        planet.appendChild(moon);
                    });
                }
                
                // Append planet to container
                container.appendChild(planet);
            });
        }

        // Initialize the solar system when the DOM is loaded
        document.addEventListener('DOMContentLoaded', buildSolarSystem);
   