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
        questionId: 16, question: 'How would you address the following routine opening problem: Twisted lines.', correctAnswer: 'Before releasing the brakes, spread risers or twist risers to transfer line twist to risers, kick in opposite direction, watch altitude to 2,500 feet.',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.'], difficulty: 'Easy'
    },

    {
        questionId: 17, question: 'How would you address the following routine opening problem: Slider stops halfway down.', correctAnswer: 'Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Pull toggles to flare position and hold (or pull down rear risers and hold) and watch altitude.'], difficulty: 'Easy'
    },

    {
        questionId: 18, question: 'How would you address the following routine opening problem: Closed end cells.', correctAnswer: 'Pull toggles to flare position and hold (or pull down rear risers and hold) and watch altitude. If stubborn, determine controllability with turn and flare by 2,500 feet.',
        incorrectAnswers: ['Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.', 'Pull both front risers and release them rapidly'], difficulty: 'Easy'
    },

    {
        questionId: 19, question: 'How would you address the following routine opening problem: Broken lines or other damage.', correctAnswer: 'Determine controllability and ability to flare by 2,500 feet.',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Pump rear risers or steering controls at the bottom of the stroke while watching altitude to 2,500 feet.'], difficulty: 'Easy'
    },

    {
        questionId: 20, question: 'How would you address the following routine opening problem: Good canopy that is turning.', correctAnswer: 'Be sure both brakes are released.',
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
        questionId: 46, question: 'For planned deployment initiation at 3,000 feet, approximately how long should an average-sized jumper fall after exiting at 5,000 feet?', correctAnswer: '15 seconds',
        incorrectAnswers: ['10 seconds', '20 seconds'], difficulty: 'Medium'
    },

    {
        questionId: 47, question: 'What is the most appropriate response to loss of heading control in freefall?', correctAnswer: 'Altitude, arch, legs, relax.',
        incorrectAnswers: ['Correct by turning in opposite direction.', 'De-arch.'], difficulty: 'Easy'
    },

    {
        questionId: 48, question: 'What is the best way to avoid a canopy collision when turning?', correctAnswer: 'Look first in the direction of the turn.',
        incorrectAnswers: ['Announce in a loud, clear voice your upcoming turns and/or maneuvers.', 'Always fly a right-hand pattern.'], difficulty: 'Easy'
    },

    {
        questionId: 49, question: 'What is the quickest and safest way to change heading immediately after opening?', correctAnswer: 'Rear riser turn with the brakes still set.',
        incorrectAnswers: ['Aggressively use toggle inputs to turn.', 'Front riser turn with the brakes still set.'], difficulty: 'Easy'
    },

    {
        questionId: 50, question: 'How would you steer a parachute that has a broken brake line?', correctAnswer: 'If familiar with rear-riser flares on that canopy, release both brakes and use the back risers to steer.',
        incorrectAnswers: ['Use the rear risers to steer with the brakes still set.', 'Immediately cut away and pull the reserve.'], difficulty: 'Medium'
    },

    {
        questionId: 51, question: 'How would you prepare to land a canopy using the rear risers to flare?', correctAnswer: 'Practice with rear-riser flares at altitude with that canopy during a routine jump.',
        incorrectAnswers: ['Prepare to PLF.', 'Set the brakes first, then land using rear risers.'], difficulty: 'Medium'
    },

    {
        questionId: 52, question: 'What is the procedure for landing on a building?', correctAnswer: 'Disconnect the RSL (if time), contact the building feet first, PLF, cut away after landing on top of a building, wait for competent help.',
        incorrectAnswers: ['Cut away 5-10 feet above the building surface, prepare to PLF.', 'Steer away from building so that you land on solid ground.'], difficulty: 'Easy'
    },

    {
        questionId: 53, question: 'What is the purpose of the automatic activation device?', correctAnswer: 'To back up the jumpers emergency procedures.',
        incorrectAnswers: ['To deploy the main canopy if the jumper is unable.', 'To give the jumper more useable freefall time.'], difficulty: 'Easy'
    },

    {
        questionId: 54, question: 'What is the check of threes?', correctAnswer: 'Check three-ring release system for correct assembly and RSL; three points of harness attachment for snap assembly or correct routing and adjustment; three operation handles-main activation, cutaway, reserve.',
        incorrectAnswers: ['Altitude, arch, legs.', 'Check with manifest to confirm your load number; check with your instructor to go over the dive flow; check with the pilot to confirm load.'], difficulty: 'Easy'
    },

    {
        questionId: 55, question: 'What must the spotter do to determine what is directly underneath the aircraft while on jump run?', correctAnswer: 'Place head completely outside the aircraft and look straight down.',
        incorrectAnswers: ['Maintain communication with flight control.', 'Check GPS spot.'], difficulty: 'Easy'
    },

    {
        questionId: 56, question: 'How far horizontally must jumpers be from any cloud below 10,000 feet MSL?', correctAnswer: '2,000 feet',
        incorrectAnswers: ['3,000 feet', 'one mile'], difficulty: 'Medium'
    },

    {
        questionId: 57, question: 'How far horizontally must jumpers be from any cloud at 10,000 feet MSL and above?', correctAnswer: 'one mile',
        incorrectAnswers: ['2,000 feet', '3,000 feet'], difficulty: 'Medium'
    },

    {
        questionId: 58, question: 'What are the minimum visibility requirements below 10,000 feet MSL?', correctAnswer: 'three miles',
        incorrectAnswers: ['one mile', 'five miles'], difficulty: 'Hard'
    },

    {
        questionId: 59, question: 'What are the minimum visibility requirements at 10,000 feet MSL and above?', correctAnswer: 'five miles',
        incorrectAnswers: ['one mile', 'three miles'], difficulty: 'Hard'
    },

    {
        questionId: 60, question: 'Who is responsible for a jumper observing cloud clearance requirements?', correctAnswer: 'Jumper and pilot.',
        incorrectAnswers: ['Each jumper.', 'Safety and Training Advisor.'], difficulty: 'Easy'
    },

    {
        questionId: 61, question: 'What is the technique for determining the point straight below the aircraft during jump run?', correctAnswer: 'Determine two lines from the horizon, one ahead and one abreast, and find the intersection of those two lines.',
        incorrectAnswers: ['Look straight down and focus on the point that does not move.', 'Determine two lines from the horizon, one ahead and one parallel, and find the intersection of those two lines.'], difficulty: 'Easy'
    },

    {
        questionId: 62, question: 'What must the jumper look for below before exiting the aircraft?', correctAnswer: 'Clouds and other aircraft.',
        incorrectAnswers: ['Previous groups of skydivers.', 'Obstacles to avoid upon landing.'], difficulty: 'Easy'
    },

    {
        questionId: 63, question: 'What happens to a jumpers fall rate when performing rolls, loops, or other freeflying maneuvers?', correctAnswer: 'Increases.',
        incorrectAnswers: ['Decreases.', 'Stays the same.'], difficulty: 'Medium'
    },

    {
        questionId: 64, question: 'What happens to a visual altimeter when its in the jumpers burble?', correctAnswer: 'Reads unreliably.',
        incorrectAnswers: ['Nothing.', 'Reads high.'], difficulty: 'Medium'
    },

    {
        questionId: 65, question: 'What is the best way to recover from a stall to full glide?', correctAnswer: 'Smoothly raise the controls.',
        incorrectAnswers: ['Quickly counteract with toggle input.', 'Pull legs up into a tight ball.'], difficulty: 'Medium'
    },

    {
        questionId: 66, question: 'Describe an aerodynamic stall as it applies to a ram-air canopy?', correctAnswer: 'Stable state of decreased glide and increased rate of descent.',
        incorrectAnswers: ['Sudden state of increased glide and increased rate of descent.', 'Stable state of increased glide and descreased rate of descent.'], difficulty: 'Hard'
    },

    {
        questionId: 67, question: 'When does a dynamic stall occur?', correctAnswer: 'At the end of a flare when the jumper begins to rock back under the canopy.',
        incorrectAnswers: ['When the front risers are pulled down quickly.', 'At the beginning of a flare.'], difficulty: 'Medium'
    },

    {
        questionId: 68, question: 'What happens after a dynamic stall if the tail is held lower than the nose?', correctAnswer: 'Full stall.',
        incorrectAnswers: ['Recovery.', 'Continued dynamic stall.'], difficulty: 'Medium'
    },

    {
        questionId: 69, question: 'What is the best way to determine a canopys optimum flare speed and depth for landing?', correctAnswer: 'Practice different rates of flare entry at different depths of flare.',
        incorrectAnswers: ['Divide exit weight by the canopys square footage.', 'Contact the manufacturer.'], difficulty: 'Medium'
    },

    {
        questionId: 70, question: 'Describe your procedure for landing in high winds.', correctAnswer: 'Stay well downwind of any obstacle, face into the wind early, disconnect the RSL, land with a PLF, pull one toggle down completely, and after landing, cut away if necessary.',
        incorrectAnswers: ['Do not attempt a stand-up landing; PLF.', 'Enter downwind leg at 3/4 brakes and smoothly continue to full brakes.'], difficulty: 'Easy'
    },

    {
        questionId: 71, question: 'How many A-lines does a nine-cell canopy have?', correctAnswer: 'ten',
        incorrectAnswers: ['nine', 'eleven'], difficulty: 'Easy'
    },

    {
        questionId: 72, question: 'To what part of the canopy do the steering lines (brake lines) connect?', correctAnswer: 'Tail',
        incorrectAnswers: ['Nose', 'End Cells'], difficulty: 'Easy'
    },

    {
        questionId: 73, question: 'What lines go through the rear slider grommets?', correctAnswer: 'C, D, and brakes',
        incorrectAnswers: ['A, B, and C', 'A, C, and D'], difficulty: 'Easy'
    },

    {
        questionId: 74, question: 'Where does the main pilot chute bridle attach to the canopy?', correctAnswer: 'top center',
        incorrectAnswers: ['rear center', 'front center'], difficulty: 'Medium'
    },

    {
        questionId: 75, question: 'Who may pack a main parachute?', correctAnswer: 'FAA rigger, person jumping the parachute, person under riggers supervision.',
        incorrectAnswers: ['Drop zone certified packer, FAA rigger.', 'Anyone.'], difficulty: 'Easy'
    },

    {
        questionId: 76, question: 'How often do the main and reserve parachute need to be packed?', correctAnswer: 'every 180 days',
        incorrectAnswers: ['every 120 days', 'every 90 days'], difficulty: 'Easy'
    },

    {
        questionId: 77, question: 'Who is in command of the aircraft?', correctAnswer: 'Pilot',
        incorrectAnswers: ['FAA', 'TSA'], difficulty: 'Easy'
    },

    {
        questionId: 78, question: 'What are two purposes for wearing seat belts in an aircraft?', correctAnswer: 'To maintain the correct balance; protection in a crash.',
        incorrectAnswers: ['To conform to federal regulations; protection in a crash.', 'To prevent items from getting loose; to maintain the correct balance.'], difficulty: 'Medium'
    },

    {
        questionId: 79, question: 'Who is responsible that the aircraft is in condition for safe flight?', correctAnswer: 'Pilot',
        incorrectAnswers: ['The aircraft owner.', 'FAA'], difficulty: 'Medium'
    },

    {
        questionId: 80, question: 'Above what altitude MSL is the pilot of an unpressurized aircraft required to breathe supplemental oxygen?', correctAnswer: '14,000 feet',
        incorrectAnswers: ['15,000 feet', '18,000 feet'], difficulty: 'Easy'
    },

    {
        questionId: 81, question: 'Above what altitude MSL are all occupants of an unpressurized aircraft required to be provided with supplemental oxygen?', correctAnswer: '15,000 feet',
        incorrectAnswers: ['14,000 feet', '18,000 feet'], difficulty: 'Easy'
    },

    {
        questionId: 82, question: 'In an aircraft with the exit door near the back, what must jumpers do to maintain the balance during exit procedures?', correctAnswer: 'Remain forward until it is time for their group to exit.',
        incorrectAnswers: ['Remain as close to the pilot as possible.', 'Follow the pilots instructions on each jump.'], difficulty: 'Medium'
    },

    {
        questionId: 83, question: 'What is the biggest danger to a jumper when flying the canopy pattern?', correctAnswer: 'other canopies',
        incorrectAnswers: ['turbulent wind', 'canopy malfunction'], difficulty: 'Easy'
    },

    {
        questionId: 84, question: 'What is the best way to avoid a canopy collision?', correctAnswer: 'See and remain clear of other jumpers.',
        incorrectAnswers: ['Stay in brakes so that you are the last jumper landing.', 'Spiral quickly so that you are the first jumper landing.'], difficulty: 'Easy'
    },

    {
        questionId: 85, question: 'How does the RSL work?', correctAnswer: 'Forms a separable link between the main riser and reserve ripcord so that cutting away the main activates the reserve, if the RSL is hooked up.',
        incorrectAnswers: ['Activates a small explosion which cuts the reserve closing loop.', 'Prevents main canopy from being cut away.'], difficulty: 'Medium'
    },

    {
        questionId: 86, question: 'What would happen if the main riser attached to the RSL breaks?', correctAnswer: 'The reserve deploys with the main still attached by the other riser.',
        incorrectAnswers: ['The reserve deploys into the main.', 'The main remains attached, creating a two-out situation.'], difficulty: 'Medium'
    },

    {
        questionId: 87, question: 'What is the best way to prevent risers from breaking?', correctAnswer: 'Inspection and maintenance; correct packing, tight line stowage, and stable deployment, all to prevent hard openings.',
        incorrectAnswers: ['Remind your rigger to inspect at every reserve inspection and repack.', 'Replace risers every year.'], difficulty: 'Medium'
    },

    {
        questionId: 88, question: 'What is one way to prevent a dual deployment?', correctAnswer: 'Initiate malfunction procedures high enough to cut away safely and avoid AAD activation.',
        incorrectAnswers: ['De-activate AAD under canopy above AAD activation altitude.', 'Deploy the main parachute at or above the AAD activation altitude.'], difficulty: 'Medium'
    },

    {
        questionId: 89, question: 'What is generally the best action to take in the following two-canopy-out scenarios: Biplane.', correctAnswer: 'Release the brakes on the front canopy only and steer that canopy gently; PLF.',
        incorrectAnswers: ['Release the RSL (if time) and cut away.', 'Release the brakes on the dominant canopy only and steer that canopy gently; or release the RSL (if time) and cut away; PLF.'], difficulty: 'Medium'
    },

    {
        questionId: 90, question: 'What is generally the best action to take in the following two-canopy-out scenarios: Side by side.', correctAnswer: 'Release the brakes on the dominant canopy only and steer that canopy gently; or release the RSL (if time) and cut away; PLF.',
        incorrectAnswers: ['Release the RSL (if time) and cut away.', 'Release the brakes on the front canopy only and steer that canopy gently; PLF.'], difficulty: 'Medium'
    },

    {
        questionId: 91, question: 'What is generally the best action to take in the following two-canopy-out scenarios: Downplane.', correctAnswer: 'Release the RSL (if time) and cut away.',
        incorrectAnswers: ['Release the brakes on the dominant canopy only and steer that canopy gently; or release the RSL (if time) and cut away; PLF.', 'Release the brakes on the front canopy only and steer that canopy gently; PLF.'], difficulty: 'Medium'
    },

    {
        questionId: 92, question: 'What is the best way to change the direction of canopy flight while conserving the most altitude?', correctAnswer: 'Braked turns.',
        incorrectAnswers: ['Front riser turns.', 'Rear riser turns.'], difficulty: 'Easy'
    },

    {
        questionId: 93, question: 'What happens if a canopy is controlled too deeply in brakes?', correctAnswer: 'It stalls.',
        incorrectAnswers: ['It dives.', 'It bucks.'], difficulty: 'Easy'
    },

    {
        questionId: 94, question: 'Describe the difference between flaring from half brakes and full glide.', correctAnswer: 'Flaring from half brakes requires a quicker stroke, the stroke is shorter, and stalls occur sooner.',
        incorrectAnswers: ['Flaring from half brakes requires a slower stroke, the stroke is longer, and stalls occur sooner.', 'Flaring from half brakes requires a slower stroke, the stroke is shorter, and stalls occur sooner.'], difficulty: 'Medium'
    },

    {
        questionId: 95, question: 'How does the half-braked position affect the canopys flight?', correctAnswer: 'Slows descent, changes glide.',
        incorrectAnswers: ['Slows descent.', 'Speeds descent, changes glide.'], difficulty: 'Medium'
    },

    {
        questionId: 96, question: 'How is heading corrected during a track?', correctAnswer: 'Dip one shoulder slightly in the direction of the turn.',
        incorrectAnswers: ['Turn head slightly towards direction of the turn.', 'Dip leg in direction of the turn.'], difficulty: 'Medium'
    },

    {
        questionId: 97, question: 'When making tracking jumps from a large plane, why is it important to track perpendicular to the jump run?', correctAnswer: 'To avoid other groups ahead and behind.',
        incorrectAnswers: ['To avoid plane on its descent.', 'To stay clear of FAA controlled airspace.'], difficulty: 'Medium'
    },

    {
        questionId: 98, question: 'What is the ground speed of a jump aircraft with an airspeed of 90 knots when flying against a 50-knot headwind on jump run?', correctAnswer: '40 knots',
        incorrectAnswers: ['140 knots', '90 knots'], difficulty: 'Easy'
    },

    {
        questionId: 99, question: 'How can jumpers assure adequate separation between groups exiting the aircraft?', correctAnswer: 'Gauge separation according to position over the ground.',
        incorrectAnswers: ['Gauge separation according to GPS instruments.', 'Count slowly to five.'], difficulty: 'Easy'
    },

    {
        questionId: 100, question: 'What are the three most important aspects of packing the main canopy?', correctAnswer: 'Lines straight and in place in the center, slider up, tight line stows.',
        incorrectAnswers: ['Lines straight and in place in the center, slider up, tail rolled tightly.', 'Stow brakes, lines straight and in place in the center, nose rolled tightly.'], difficulty: 'Medium'
    },
    {
        questionId: 101, question: 'How can you tell if the RSL is routed correctly?', correctAnswer: 'Clear path from snap shackle to guide ring.',
        incorrectAnswers: ['Red tab is visible.', 'Buckle is fully closed.'], difficulty: 'Medium'
    },

    {
        questionId: 102, question: 'What is the minimum pull altitude allowed for student skydivers and A license holders?', correctAnswer: '3,000 feet',
        incorrectAnswers: ['2,500 feet', '2,000 feet'], difficulty: 'Easy'
    },

    {
        questionId: 103, question: 'If a jumper falls for one minute through upper winds averaging 30 mph: How far will the jumper drift?', correctAnswer: '1/2 mile',
        incorrectAnswers: ['1/4 mile', '3/4 mile'], difficulty: 'Hard'
    },

    {
        questionId: 104, question: 'What is the procedure for landing in power lines?', correctAnswer: 'Avoid the area early during the descent, minimum braked turn necessary to avoid lines, land parallel to the wires, braked landing, prepare for PLF, try to touch only one line at a time, wait for help and confirmation that the power has been turned off and will remain off until recovery operations are complete.',
        incorrectAnswers: ['Get as big as possible, disconnect RSL (if time), cut away, prepare to PLF.', 'Make any maneuvers necessary to avoid landing in power lines.'], difficulty: 'Easy'
    },

    {
        questionId: 105, question: 'What does a USPA A license permit a skydiver to do?', correctAnswer: 'Jump without supervision, pack his or her own main parachute, engage in basic group jumps, and perform water jumps.',
        incorrectAnswers: ['Compete in USPA competitions and events.', 'Jump without supervision and pack anyones main parachute.'], difficulty: 'Easy'
    },

    {
        questionId: 106, question: 'What should an A-licensed jumper do to regain currency after a ten-week period of inactivity?', correctAnswer: 'Make at least one jump under the supervision of a USPA instructional rating holder.',
        incorrectAnswers: ['Go through the first jump course and repeat all necessary ISP categories.', 'Make at least one static line jump.'], difficulty: 'Medium'
    },

    {
        questionId: 107, question: 'What should an A-licensed jumper do to regain currency after a four-month period of inactivity?', correctAnswer: 'Make at least one jump beginning in Category D with a USPA AFF Instructor or in Category B with a USPA IAD Static-Line, or Tandem Instructor before proceeding to unsupervised freefall.',
        incorrectAnswers: ['Go through the first jump course and repeat all necessary ISP categories.', 'Make at least one jump under the supervision of a USPA instructional rating holder.'], difficulty: 'Medium'
    },

    {
        questionId: 108, question: 'What is the primary directional control when moving forward to dock in freefall?', correctAnswer: 'legs',
        incorrectAnswers: ['arms', 'shoulders'], difficulty: 'Easy'
    },

    {
        questionId: 109, question: 'What is the minimum break-off altitude for freefall in groups of five or fewer?', correctAnswer: '1,500 feet above planned deployment altitude',
        incorrectAnswers: ['1,000 feet above planned deployment altitude', '2,000 feet above planned deployment altitude'], difficulty: 'Medium'
    },

    {
        questionId: 110, question: 'What is the danger of entering a toggle turn too quickly?', correctAnswer: 'Line Twist',
        incorrectAnswers: ['Stall', 'Lineover'], difficulty: 'Easy'
    },

    {
        questionId: 111, question: 'What does a canopy do after completing a maximum input toggle turn?', correctAnswer: 'It dives.',
        incorrectAnswers: ['It stalls.', 'It planes out.'], difficulty: 'Hard'
    },

    {
        questionId: 112, question: 'What are the three biggest dangers of a hard toggle turn near the ground?', correctAnswer: '1: line twist; 2: collision with jumpers; 3: collision with the ground',
        incorrectAnswers: ['1: line twist; 2: loss of control; 3: stall', '1: stall; 2:collision with jumpers; 3: collision with the ground'], difficulty: 'Medium'
    },

    {
        questionId: 113, question: 'What are the first things to do in the event of a collision and entanglement with another jumper?', correctAnswer: 'Check altitude, establish communication.',
        incorrectAnswers: ['Cut away and deploy reserve.', 'Clear entaglement, check condition of other jumper.'], difficulty: 'Medium'
    },

    {
        questionId: 114, question: 'What is the most critical aspect of closing the main container equipped with a hand-deployed pilot chute?', correctAnswer: 'Bridle routing and placement.',
        incorrectAnswers: ['Orientation of closing pin.', 'Closing pin loop is as far up the closing pin as possible.'], difficulty: 'Medium'
    },

    {
        questionId: 115, question: 'Why is it a bad idea to drag the harness and container system when stowing the lines?', correctAnswer: 'It causes unnecessary wear on the three-ring release webbing and loops.',
        incorrectAnswers: ['Harness and container fabric colors will fade faster.', 'Foreign objects could get caught in the lines.'], difficulty: 'Medium'
    },

    {
        questionId: 116, question: 'When velcro is used on the brake system, why is it a good idea to place your toggles back on the velcro after you land?', correctAnswer: 'It covers the hook velcro, which can damage other components, and prevents tangles.',
        incorrectAnswers: ['It will prevent future brake fires.', 'It regenerates the velcro mechanism.'], difficulty: 'Easy'
    },

    {
        questionId: 117, question: 'Why is it bad to leave a parachute in the sun?', correctAnswer: 'Ultraviolet rays degrade nylon.',
        incorrectAnswers: ['Nylon overheats easily.', 'The colors will fade prematurely.'], difficulty: 'Easy'
    },

    {
        questionId: 118, question: 'What damage could occur from storing a parachute for prolonged periods in a car during the summer?', correctAnswer: 'Shorter life for AAD batteries, stow band degradation.',
        incorrectAnswers: ['Nylon retains folds and will not open properly.', 'Car exhaust fumes degrade materials.'], difficulty: 'Medium'
    },

    {
        questionId: 119, question: 'What happens to velcro touch fastener when it is used frequently?', correctAnswer: 'It loses tackiness.',
        incorrectAnswers: ['Its durability increases.', 'Nothing.'], difficulty: 'Easy'
    },

    {
        questionId: 120, question: 'What happens to stiffened tuck flaps that are frequently used?', correctAnswer: 'distortion',
        incorrectAnswers: ['strenghtening', 'nothing'], difficulty: 'Easy'
    },

    {
        questionId: 121, question: 'Who publishes and enforces rules regarding parachute packing and parachute maintenance?', correctAnswer: 'FAA',
        incorrectAnswers: ['USPA', 'Parachute manufacturers'], difficulty: 'Medium'
    },

    {
        questionId: 122, question: 'What may result if recovering altitude (floating up) under a freefall formation?', correctAnswer: 'Collision with formation, funnel.',
        incorrectAnswers: ['Formation will re-form quicker.', 'Premature AAD fire.'], difficulty: 'Medium'
    },

    {
        questionId: 123, question: 'What extra consideration is required when sitting or moving towards an opened door?', correctAnswer: 'All are correct.',
        incorrectAnswers: ['Check your handles before starting to move to the door.', 'Be aware of your handles near the door.'], difficulty: 'Easy'
    },

    {
        questionId: 124, question: 'Why is it important to remain clear of the area directly above and below other jumpers in freefall?', correctAnswer: 'To minimize outcome of possible AAD activation or other accidental or unplanned pack opening.',
        incorrectAnswers: ['To comply with FAA regulations.', 'To maintain clear line of sight with the ground at all times.'], difficulty: 'Medium'
    },

    {
        questionId: 125, question: 'Why is it important to maintain an automatic activation device to the manufacturers standards?', correctAnswer: 'To improve their chances for correct operation, to help prevent premature AAD activations, to comply with the law.',
        incorrectAnswers: ['To ensure warranty coverage from the manufacturer.', 'It will not function otherwise.'], difficulty: 'Easy'
    },

    {
        questionId: 126, question: 'What is the correct response to a canopy entanglement with another jumper below 1,000 feet if it appears the two canopies cannot be separated in time for a safe landing?', correctAnswer: 'Deploy the reserve',
        incorrectAnswers: ['Cut away and deploy the reserve.', 'Cut away and prepare to PLF.'], difficulty: 'Easy'
    },

    {
        questionId: 127, question: 'Describe your procedure for landing in trees.', correctAnswer: 'Face into the wind, prepare for PLF, flare to half brakes, protect face and under arms, wait for help.',
        incorrectAnswers: ['Use any maneuver necessary to avoid landing in trees.', 'Cut away 5-10 feet above top of trees, PLF.'], difficulty: 'Medium'
    },

    {
        questionId: 128, question: 'What does a tall cumulus cloud indicate?', correctAnswer: 'Thunderstorms in the area.',
        incorrectAnswers: ['Calm weather.', 'High temperatures.'], difficulty: 'Hard'
    },

    {
        questionId: 129, question: 'What is the most dangerous part of an incoming front for aircraft and skydivers?', correctAnswer: 'Thunderstorms in the gust front; rapid and significant changes in winds.',
        incorrectAnswers: ['Colder temperatures.', 'Higher barometric pressure can damage altimeters and AADs.'], difficulty: 'Hard'
    },

    {
        questionId: 130, question: 'Why is it important to look ahead during a swoop toward other jumpers in freefall?', correctAnswer: 'To see others and avoid a collision.',
        incorrectAnswers: ['To maximize your speed.', 'To maintain heading.'], difficulty: 'Easy'
    },

    {
        questionId: 131, question: 'What is the fastest way to slow down from a freefall swoop approach?', correctAnswer: 'Slow fall position with arms forward and knees down.',
        incorrectAnswers: ['Arms back at waist and legs straight.', 'Aggressive arch.'], difficulty: 'Easy'
    },

    {
        questionId: 132, question: 'What is the danger of a loose or worn main container closing loop?', correctAnswer: 'Premature deployment.',
        incorrectAnswers: ['AAD fire.', 'Line over malfunction.'], difficulty: 'Easy'
    },

    {
        questionId: 133, question: 'Why must three-ring release cables be cleaned periodically?', correctAnswer: 'Corrosion deposits cause them to bind.',
        incorrectAnswers: ['Oxidation will cause microscopic burrs on metal which could tear fabric.', 'To remove tar build up.'], difficulty: 'Medium'
    },

    {
        questionId: 134, question: 'If you see that you have begun to turn too low to the ground for a safe landing, what should be your first response?', correctAnswer: 'Go to half brakes and finish the flare at an appropriate height.',
        incorrectAnswers: ['Quickly use toggle controls to turn in the opposite direction.', 'Prepare to PLF.'], difficulty: 'Easy'
    },

    {
        questionId: 135, question: 'What effect does pulling on the front risers have on the canopy?', correctAnswer: 'Dramatic increase in rate of descent.',
        incorrectAnswers: ['Dramatic increase in forward speed.', 'Dramatic decrease in rate of descent.'], difficulty: 'Easy'
    },

    {
        questionId: 136, question: 'When performing front riser maneuvers, what should you do with the toggles?', correctAnswer: 'Keep them in your hands.',
        incorrectAnswers: ['Stow them.', 'Keep them away from the front risers.'], difficulty: 'Easy'
    },

    {
        questionId: 137, question: 'What are the two biggest dangers of front-riser maneuvers near the ground?', correctAnswer: 'Collisions with other jumpers, collision with the ground.',
        incorrectAnswers: ['Canopy stalls, collision with the ground.', 'Broken lines, collision with the ground.'], difficulty: 'Easy'
    },

    {
        questionId: 138, question: 'What are some of the possible results of a turn made too low to the ground??', correctAnswer: 'Serious injury or death.',
        incorrectAnswers: ['Increased chance of landing on target.', 'Horseshoe malfunction.'], difficulty: 'Easy'
    },

    {
        questionId: 139, question: 'What is the procedure for landing in water?', correctAnswer: 'Inflate flotation device, disconnect chest strap and RSL, prepare for PLF, face into wind, flare, hold breath, cut away once feet are wet, remove leg straps, swim upwind; if under the canopy, dive deep and swim away or follow one seam until out from underneath.',
        incorrectAnswers: ['Inflate flotation device, prepare for PLF, face into wind, flare, hold breath, remove leg straps, swim upwind; if under the canopy, dive deep and swim away or follow one seam until out from underneath.', 'Inflate flotation device, disconnect chest strap and RSL, prepare for PLF, face into wind, flare, hold breath, cut away five to ten feet above water, remove leg straps, swim upwind; if under the canopy, dive deep and swim away or follow one seam until out from underneath.'], difficulty: 'Medium'
    },

    {
        questionId: 140, question: 'What is the maximum percentage of visible wear allowable on a main closing loop?', correctAnswer: 'ten percent',
        incorrectAnswers: ['fifty percent', 'twenty-five percent'], difficulty: 'Easy'
    },

    {
        questionId: 141, question: 'Can a jump be legally made from an aircraft without an operating radio?', correctAnswer: 'No',
        incorrectAnswers: ['Yes', 'Yes, as long as the aircraft has an operating GPS system.'], difficulty: 'Medium'
    },

    {
        questionId: 142, question: 'What is the least notification the FAA requires before any jump or series of jumps may be made?', correctAnswer: 'one hour',
        incorrectAnswers: ['twenty-four hours', 'one month'], difficulty: 'Hard'
    },

    {
        questionId: 143, question: 'Where can a pilot look to determine if a plane is approved for flight with the door removed?', correctAnswer: 'AC 105.2, Appendix 2, or aircraft owners manual.',
        incorrectAnswers: ['No approval is needed.', 'FAR 105.3'], difficulty: 'Hard'
    },

    {
        questionId: 144, question: 'Whose name will the FAA require when filing a notification for parachute jumping?', correctAnswer: 'The person giving notice.',
        incorrectAnswers: ['The local safety and training advisor.', 'The pilot.'], difficulty: 'Hard'
    },

    {
        questionId: 145, question: 'An additional hazard under canopy during night jumps may be:', correctAnswer: 'All are correct.',
        incorrectAnswers: ['Moon Shadow', 'Reduced Vision', 'Impaired Depth Perception'], difficulty: 'Hard'
    },

    {
        questionId: 146, question: 'Night vision can begin to deteriorate starting at what altitude?', correctAnswer: '5,000 feet MSL',
        incorrectAnswers: ['7,000 feet MSL', '9,000 feet MSL', '15,000 feet MSL'], difficulty: 'Hard'
    },

    {
        questionId: 147, question: 'What is the farthest a jump plane may fly from the airport of departure to drop jumpers?', correctAnswer: '25 Miles',
        incorrectAnswers: ['2 Miles', '10 Miles'], difficulty: 'Hard'
    },

    {
        questionId: 148, question: 'For freeflying, the first position that a skydiver should learn is:', correctAnswer: 'Sit fly',
        incorrectAnswers: ['Head Down', 'Mind Warp'], difficulty: 'Hard'
    },

    {
        questionId: 149, question: 'Before jumping with cameras, USPA recommends:', correctAnswer: 'All are correct.',
        incorrectAnswers: ['C License or higher', 'at least 50 recent jumps using the same equipment', 'Flying skills well above average'], difficulty: 'Medium'
    },
    {
        questionId: 150, question: 'High altitude jumps made above 25,000 feet MSL should include pre-breathing 100% O2 for how many minutes before takeoff?', correctAnswer: '30 Mins',
        incorrectAnswers: ['10 Mins', '20 Mins'], difficulty: 'Hard'
    },

    {
        questionId: 151, question: 'Recommended deployment altitude for new wing-suit jumpers is:', correctAnswer: '5,000 AGL',
        incorrectAnswers: ['4,000 AGL', '4,500 AGL'], difficulty: 'Hard'
    },
    {
        questionId: 152, question: 'Under what conditions may objects be dropped from an aircraft?', correctAnswer: 'If precautions are taken to avoid injury or damage to persons or property.',
        incorrectAnswers: ['With the proper FAA approval', 'Never'], difficulty: 'Hard'
    },
    {
        questionId: 153, question: 'How much fuel must be aboard an aircraft for legal flight under daytime VFR rules?', correctAnswer: 'Enough for the flight plus 30 mins',
        incorrectAnswers: ['Enough for the flight plus 60 mins', 'Enough for the flight'], difficulty: 'Hard'
    },
    {
        questionId: 154, question: 'All of a dropzones piston-powered jump planes must be inspected:', correctAnswer: 'Both annually and every 100 hours',
        incorrectAnswers: ['Annually', 'Every 100 Hours', 'Never'], difficulty: 'Hard'
    },
    {
        questionId: 155, question: 'Parachute jumps made onto any airport must have prior approval from:', correctAnswer: 'The Airport Management',
        incorrectAnswers: ['The FAA', 'The NTSB'], difficulty: 'Hard'
    },
    {
        questionId: 156, question: 'Fueling certain turbine powered aircraft while the engines are running is:', correctAnswer: 'Recognized by the USPA when guidelines outlined by PIA are met.',
        incorrectAnswers: ['Approved for any airplane used for skydiving', 'Not Approved'], difficulty: 'Hard'
    },
    {
        questionId: 157, question: 'For extreme altitude jumps above 40,000 feet MSL, a skydiver should', correctAnswer: 'Both a USPA D license and at least 2 jumps with the same equipment',
        incorrectAnswers: ['Hold a D license', 'Have made at least 2 jumps from below 35,000 feet MSL using the same equipment', 'None'], difficulty: 'Hard'
    },
    {
        questionId: 158, question: 'Any parachute smaller than 150 square feet:', correctAnswer: 'Is considered advanced regardless of wing loading.',
        incorrectAnswers: ['Is considered advanced if above a 1.1:1 wing loading', 'Is considered advanced if above a 1.3:1 wing loading'], difficulty: 'Hard'
    },
    {
        questionId: 159, question: 'When freeflying, a jumper should:', correctAnswer: 'All are correct.',
        incorrectAnswers: ['Have at least one visual and one audible altimeter', 'Use an AAD', 'Use equipment with proper pin and bridle protection.'], difficulty: 'Hard'
    },
    {
        questionId: 160, question: 'Wingsuit jumpers wave off by:', correctAnswer: 'Clicking heels together several times.',
        incorrectAnswers: ['A normal wave off with arms.', 'Extracting the pilot chute and waiving it before release'], difficulty: 'Hard'
    },
    {
        questionId: 161, question: 'An Open Field Demo is defined as an area that has a landing area of at least what size?', correctAnswer: '500,000 square feet',
        incorrectAnswers: ['100,000 square feet', '250,000 square feet'], difficulty: 'Hard'
    },
    {
        questionId: 162, question: 'A Level 1 Demo is defined as an area that has a landing area of at least what size?', correctAnswer: '250,000 square feet',
        incorrectAnswers: ['100,000 square feet', '500,000 square feet'], difficulty: 'Hard'
    },
    {
        questionId: 163, question: 'A Level 2 Demo is defined as an area that has a landing area of at least what size?', correctAnswer: '5,000 square feet per four jumpers',
        incorrectAnswers: ['100,000 square feet', '50,000 square feet'], difficulty: 'Hard'
    },
    {
        questionId: 164, question: 'What are the maximum recommended winds for Demo jumps?', correctAnswer: '15 mph',
        incorrectAnswers: ['10 mph', '20 mph'], difficulty: 'Hard'
    }
]
