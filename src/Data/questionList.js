export const questions = [
    { questionId: 1, question: 'How many jumps minimum to get your A license?', correctAnswer: '25', incorrectAnswers: ['50', '75', '100'], difficulty: 'Easy' },

    { questionId: 2, question: 'How many jumps minimum to get your B license?', correctAnswer: '50', incorrectAnswers: ['25', '75', '100'], difficulty: 'Easy' },

    { questionId: 3, question: 'How many jumps minimum to get your C license?', correctAnswer: '200', incorrectAnswers: ['300', '250', '100'], difficulty: 'Easy' },

    { questionId: 4, question: 'How many jumps minimum to get your D license?', correctAnswer: '500', incorrectAnswers: ['250', '300', '1000'], difficulty: 'Easy' },

    {
        questionId: 5, question: 'Describe how to avoid the propeller(s) when approaching an aircraft.', correctAnswer: 'Approach fixed-wing aircraft from the rear.',
        incorrectAnswers: ['Approach from the front so the pilot can see you.', 'Always duck lower than the height of the propeller.'], difficulty: 'Easy'
    },

    {
        questionId: 6, question: 'Who is responsible for seat belt use in the aircraft?', correctAnswer: 'The pilot and each jumper.',
        incorrectAnswers: ['The loads jumpmaster.', 'Each jumper.'], difficulty: 'Easy'
    },

    {
        questionId: 7, question: 'When must seat belts be fastened?', correctAnswer: 'During movement on the surface (taxi), takeoff, and landing.',
        incorrectAnswers: ['For takeoff.', 'During takeoffs and landings only.'], difficulty: 'Easy'
    },

    {
        questionId: 8, question: 'As a licensed jumper, from whom do you take directions in the event of an aircraft problem?', correctAnswer: 'The pilot',
        incorrectAnswers: ['The jumper on the plane who has been in the sport the longest.', 'The person by the door.'], difficulty: 'Easy'
    },

    { questionId: 9, question: 'Where does the wind come from initially upon exit from the aircraft?', correctAnswer: 'Ahead', incorrectAnswers: ['Below', 'Behind'], difficulty: 'Easy' },

    { questionId: 10, question: 'What changes during a turn under canopy that makes low turns so dangerous?', correctAnswer: 'The canopy dives', incorrectAnswers: ['The canopy planes out.', 'The canopy briefly gains altitude.'], difficulty: 'Easy' },

    {
        questionId: 11, question: 'What are the landing priorities?', correctAnswer: 'A: Land with the wing level and flying in a straight line; B:Land in a clear and open area, avoiding obstacles; C: Flare to at least the half-brake position.',
        incorrectAnswers: ['A: Land standing up B: Land right on the pre-declared target.', 'A: Land right on the pre-declared target. B: Land with as much forward speed as possible.'], difficulty: 'Easy'
    },

    {
        questionId: 12, question: 'What is the purpose of the landing flare?', correctAnswer: 'To convert forward speed to lift.',
        incorrectAnswers: ['To get the canopy in front of you.', 'To convert lift to forward speed.'], difficulty: 'Easy'
    },

    {
        questionId: 13, question: 'Describe the procedure for a hard landing (parachute landing fall or PLF).', correctAnswer: 'Feet and knees together, hands and elbows in, roll on landing.',
        incorrectAnswers: ['Legs spread slightly to distribute impact more evenly, arms out to stop fall.', 'Legs and knees up to avoid striking them into the ground. Absorb impact with butt and lower back.'], difficulty: 'Easy'
    },

    {
        questionId: 14, question: 'What is your most important task when in freefall?', correctAnswer: 'Altitude awareness to recognize and act at the assigned pull altitude.',
        incorrectAnswers: ['Fall stable and on heading.', 'Correcly complete planned dive flow.'], difficulty: 'Easy'
    },

    {
        questionId: 15, question: 'How would you clear a pilot chute hesitation?', correctAnswer: 'Change body position to modify the air flow over my back.',
        incorrectAnswers: ['Wait for the AAD to fire.', 'Pull harder.'], difficulty: 'Easy'
    },

    {
        questionId: 16, question: 'How would you address the following routine opening problem: Twisted lines?', correctAnswer: 'Before releasing the brakes, spread risers or twist risers to transfer line twist to risers, kick in opposite direction, watch altitude to 2,500 feet.',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.'], difficulty: 'Easy'
    },

    {
        questionId: 17, question: 'How would you address the following routine opening problem: Slider stops halfway down?', correctAnswer: 'Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Pull toggles to flare position and hold (or pull down rear risers and hold) and watch altitude.'], difficulty: 'Easy'
    },

    {
        questionId: 18, question: 'How would you address the following routine opening problem: Closed end cells?', correctAnswer: 'Pull toggles to flare position and hold (or pull down rear risers and hold) and watch altitude. If stubborn, determine controllability with turn and flare by 2,500 feet.',
        incorrectAnswers: ['Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.', 'Pull both front risers and release them rapidly'], difficulty: 'Easy'
    },

    {
        questionId: 19, question: 'How would you address the following routine opening problem: Broken lines or other damage?', correctAnswer: 'Determine controllability and ability to flare by 2,500 feet.',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.'], difficulty: 'Easy'
    },

    {
        questionId: 20, question: 'How would you address the following routine opening problem: Good canopy that is turning?', correctAnswer: 'Be sure both brakes are released.',
        incorrectAnswers: ['Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.', 'Cut away and deploy the reserve.'], difficulty: 'Easy'
    },

    {
        questionId: 21, question: 'What is the appropriate action if below 1,000 feet without a landable parachute?', correctAnswer: 'Immediately deploy the reserve parachute',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Wait for AAD to fire.'], difficulty: 'Easy'
    },

    {
        questionId: 22, question: 'If the pilot chute goes over the front of the canopy after it has opened, how can you tell if its a malfunction?', correctAnswer: 'If the canopy flares and turns correctly, it is probably safe to land.',
        incorrectAnswers: ['If the pilot chute is fully inflated, it is a malfunction.', 'If the pilot chute is not fully inflated, it is a malfunction.'], difficulty: 'Easy'
    },

    {
        questionId: 23, question: 'What is the correct response to an open container in freefall using a hand-deployed system?', correctAnswer: 'No more than two tries or two seconds to locate and deploy the main pilot chute; if no success, cut away and deploy the reserve.',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Immediately deploy the reserve parachute'], difficulty: 'Easy'
    },

    {
        questionId: 24, question: 'If the pilot chute extracts the deployment bag from the container but the deployment bag fails to release the parachute canopy for inflation, what is the correct response?', correctAnswer: 'Cut away and deploy the reserve.',
        incorrectAnswers: ['Determine controllability and ability to flare by 2,500 feet.', 'Flip to your back to see whats happening.'], difficulty: 'Easy'
    },

    {
        questionId: 25, question: 'If part of the deployed parachute is caught on the jumper or the equipment (horseshoe),what is the correct response?', correctAnswer: 'Cut away and deploy the reserve.',
        incorrectAnswers: ['No more than two tries or two seconds to locate and deploy the main pilot chute; if no success, cut away and deploy the reserve.', 'Wait for the AAD to fire.'], difficulty: 'Easy'
    },

    {
        questionId: 26, question: 'What are the three legs of the canopy landing pattern with relation to the wind direction?', correctAnswer: 'Downwind (with the wind), base (across the wind but downwind of the target), and final (into the wind).',
        incorrectAnswers: ['Downwind (against the wind), base (across the wind but upwind of the target), and final (into the wind).', 'Downwind (with the wind), base (across the wind but downwind of the target), and final (with the wind).'], difficulty: 'Easy'
    },

    {
        questionId: 27, question: 'Why is it undesirable to land off the end of a runway?', correctAnswer: 'Approaching and departing aircraft.',
        incorrectAnswers: ['Turbulent winds.', 'FAA regulations.'], difficulty: 'Easy'
    },

    {
        questionId: 28, question: 'In flat and stable freefall at terminal velocity, how long does it take an average jumper to fall 1,000 feet?', correctAnswer: '5.5 seconds',
        incorrectAnswers: ['4.5 seconds', '6.5 seconds'], difficulty: 'Medium'
    },

    {
        questionId: 29, question: 'What is the correct procedure for recovering from instability to the belly-to-earth position?', correctAnswer: 'Altitude, arch, legs, relax.',
        incorrectAnswers: ['Be more aggressive in your body position.', 'De-arch, relax.'], difficulty: 'Easy'
    },

    {
        questionId: 30, question: 'Which is better, to pull at the planned altitude or to fall lower to get stable before pulling?', correctAnswer: 'Pull at the planned altitude, regardless of stability.',
        incorrectAnswers: ['Pull above the planned altitude if you know you will not be stable.', 'Always be stable before pulling.'], difficulty: 'Easy'
    },

    {
        questionId: 31, question: 'What is the purpose of the wave-off before deployment?', correctAnswer: 'To signal other jumpers.',
        incorrectAnswers: ['To get stable before pulling.', 'To relax in preparation for deployment.'], difficulty: 'Easy'
    },

    {
        questionId: 32, question: 'What is the purpose of the parachute landing fall (PLF), and why is it important for skydivers?', correctAnswer: 'It protects against hard landings, and all skydivers have hard landings.',
        incorrectAnswers: ['PLF allows skdyivers to land in any location safely.', 'It helps protect your gear.'], difficulty: 'Easy'
    },

    {
        questionId: 33, question: 'What part of the landing pattern is most dangerous to skydivers?', correctAnswer: 'The intersection of the base and final approach legs.',
        incorrectAnswers: ['The last 20 feet of the landing leg.', 'Entry into the downwind leg.'], difficulty: 'Medium'
    },

    {
        questionId: 34, question: 'How do higher wind speeds affect the planned landing pattern as compared to the pattern plan for a calm day?', correctAnswer: 'Shortens the final approach, shortens the base leg, lengthens the downwind leg, and places the planned pattern entry point farther upwind.',
        incorrectAnswers: ['Lengthens the final approach, shortens the base leg, lengthens the downwind leg, and places the planned pattern entry point farther upwind.', 'Shortens the final approach, lengthens the base leg, lengthens the downwind leg, and places the planned pattern entry point farther downwind.'], difficulty: 'Medium'
    },

    {
        questionId: 35, question: 'In moderately strong winds, how far downwind of an obstacle would you expect to find turbulence?', correctAnswer: '10-20 times the height of the obstacle.',
        incorrectAnswers: ['1-3 times the height of the obstacle.', '5-10 times the height of the obstacle.'], difficulty: 'Easy'
    },

    {
        questionId: 36, question: 'What is the best procedure to use when flying your canopy in turbulent conditions?', correctAnswer: 'Keep the canopy flying in a straight line at full flight (or as directed by the owners manual).',
        incorrectAnswers: ['Fly your canopy at half-brakes.', 'Fly in a zig-zag pattern at full flight (or as directed by the owners manual).'], difficulty: 'Easy'
    },

    {
        questionId: 37, question: 'Why is it important to protect your parachute system operation handles when in and around the aircraft?', correctAnswer: 'Keeps them in place and prevents accidental or premature deployment.',
        incorrectAnswers: ['Protects them from corrosive aircraft exhaust.', 'Reinforces muscle memory of handle locations.'], difficulty: 'Easy'
    },

    {
        questionId: 38, question: 'What is the equipment pre-flight strategy to use before putting on your gear?', correctAnswer: 'Top to bottom, back to front.',
        incorrectAnswers: ['Metal parts first, fabric second, plastic third.', 'Manifest check, instructor check, pilot check.'], difficulty: 'Easy'
    },

    {
        questionId: 39, question: 'How does the three-ring main canopy release system disconnect the main parachute from the harness?', correctAnswer: 'Pulls the cables to release the cloth loop.',
        incorrectAnswers: ['Cuts the risers.', 'Pulls the cables to release the reserve closing pin.'], difficulty: 'Easy'
    },

    {
        questionId: 40, question: 'How do you know if a reserve parachute has been packed by an FAA rigger within the last 180 days?', correctAnswer: 'Information found on the reserve packing data card.',
        incorrectAnswers: ['Riggers packing seal on the reserve ripcord.', 'Drop zone administrative records.'], difficulty: 'Easy'
    },

    {
        questionId: 41, question: 'How do you know the reserve container has not been opened since the FAA rigger last closed it?', correctAnswer: 'Riggers packing seal on the reserve ripcord.',
        incorrectAnswers: ['Information found on the reserve packing data card.', 'Drop zone administrative records.'], difficulty: 'Easy'
    },

    {
        questionId: 42, question: 'If the surface winds are blowing from west to east, which direction will you face to fly the downwind leg of the landing pattern?', correctAnswer: 'East',
        incorrectAnswers: ['West', 'North', 'South'], difficulty: 'Easy'
    },

    {
        questionId: 43, question: 'How is wing loading calculated?', correctAnswer: 'Divide the exit weight by the square footage.',
        incorrectAnswers: ['Divide the square footage by the exit weight.', 'Divide the jumpers weight by the square footage.'], difficulty: 'Medium'
    },

    {
        questionId: 44, question: 'Which canopy size (same model design) will exhibit quicker control response?', correctAnswer: '170 square feet with a 170-pound jumper (geared up).',
        incorrectAnswers: ['190-square feet with a 190-pound jumper (geared up).', '210-square feet with a 210-pound jumper (geared up).'], difficulty: 'Medium'
    },

    {
        questionId: 45, question: 'When is it OK to attempt a stand-up landing?', correctAnswer: 'When the jumper has control of all the variables and has executed a good flare at the appropriate altitude.',
        incorrectAnswers: ['When the winds are between 5-10 mph.', 'When the parachute is open, square, steerable and landable.'], difficulty: 'Easy'
    },

    {
        questionId: 46, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 47, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 48, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 49, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 50, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 51, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 52, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 53, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 54, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 55, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 56, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 57, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 58, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 59, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 60, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 61, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 62, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 63, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 64, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 65, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 66, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 67, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 68, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 69, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 70, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 71, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 72, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 73, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 74, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 75, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 76, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 77, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 78, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 79, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 80, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 81, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 82, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 83, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 84, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 85, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 86, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 87, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 88, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 89, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 90, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 91, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 92, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 93, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 94, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 95, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 96, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 97, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 98, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 99, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 100, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },
    {
        questionId: 101, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 102, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 103, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 104, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 105, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 106, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 107, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 108, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 109, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 110, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 111, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 112, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 113, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 114, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 115, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 116, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 117, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 118, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 119, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 120, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 121, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 122, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 123, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 124, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 125, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 126, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 127, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 128, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 129, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 130, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 131, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 132, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 133, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 134, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 135, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 136, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 137, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 138, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 139, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 140, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 141, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 142, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 143, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 144, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 145, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 146, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 147, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 148, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 149, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    },

    {
        questionId: 150, question: '', correctAnswer: '',
        incorrectAnswers: ['', ''], difficulty: ''
    }


]
