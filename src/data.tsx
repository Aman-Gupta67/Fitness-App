export const workoutDays = [
  {
    day: 'Mon', tag: 'Push', tc: 'ts',
    title: 'Upper Body Push - Chest + Shoulders + Triceps',
    dur: '55-60 min', split: 'Strength', focus: 'Chest / Shoulders / Triceps',
    groups: [
      {
        label: 'Warm-up (Mandatory)',
        exs: [
          {
            name: 'Neck Circles + Shoulder Mobility', sets: '2 x 30 sec each',
            note: 'Critical for your neck and shoulder condition. Do slow, deliberate circles forward and backward.',
            gif: 'cat_cow', calBurn: '~8-12 kcal',
            instr: ['Stand upright. Slowly roll neck in a full circle clockwise 5 times.', 'Reverse direction 5 times.', 'Then rotate both shoulders backward 10 times, then forward 10 times.']
          },
          {
            name: 'Cat-Cow Stretch', sets: '2 x 10 reps',
            note: 'Loosens thoracic spine and lower back stiffness before any loading.',
            gif: 'cat_cow', calBurn: '~5-8 kcal',
            instr: ['Get on hands and knees, wrists under shoulders, knees under hips.', 'Inhale - drop belly, lift head and tailbone (cow position).', 'Exhale - round spine, tuck chin and pelvis (cat position).', 'Move slowly and breathe with each rep.']
          },
          {
            name: 'Band Pull-Aparts', sets: '2 x 15 reps',
            note: 'Activates rotator cuff before pressing. Do this before every upper body session.',
            gif: 'face_pull', calBurn: '~8-12 kcal',
            instr: ['Hold a resistance band at shoulder width with both hands, arms extended in front.', 'Pull band apart by moving hands out to sides, squeezing shoulder blades together.', 'Control the return slowly. Band stretches to chest width.', 'Keep arms at shoulder height throughout.']
          },
        ]
      },
      {
        label: 'Main Compound Lifts',
        exs: [
          {
            name: 'Barbell Bench Press', sets: '4 x 10 reps',
            note: 'Start at 40-50% of max weight. Full range of motion - bar touches chest. Feet flat on floor.',
            gif: 'bench_press', calBurn: '~50-65 kcal',
            instr: ['Lie flat on bench. Grip bar slightly wider than shoulder width.', 'Unrack bar and position over lower chest.', 'Lower bar to chest in a controlled 2-second descent.', 'Press back up explosively. Do not bounce bar off chest.'],
            alternatives: [
              {
                name: 'Dumbbell Bench Press', sets: '4 x 10 reps', calBurn: '~45-60 kcal',
                note: 'Greater range of motion than barbell. Easier on shoulder joints. Each arm works independently.',
                instr: ['Lie flat on bench, hold dumbbells at chest level, palms forward.', 'Press both dumbbells up until arms nearly straight.', 'Lower slowly with control - wider arc than barbell.', 'Keep shoulder blades squeezed throughout.']
              },
              {
                name: 'Smith Machine Bench Press', sets: '4 x 10 reps', calBurn: '~48-62 kcal',
                note: 'Bar moves on fixed vertical track - great for solo pressing with safety. Good for beginners.',
                instr: ['Set safety catches. Lie under bar on bench.', 'Unrack by rotating wrists.', 'Lower bar to lower chest in 2 seconds.', 'Press up and re-rack by rotating at top if needed.']
              },
            ]
          },
          {
            name: 'Incline Dumbbell Press', sets: '3 x 12 reps',
            note: 'Weeks 1-4: Replace with Cable Chest Fly if shoulder pain exists. Use 30-45 degree bench angle only.',
            gif: 'incline_press', calBurn: '~35-45 kcal',
            instr: ['Set bench to 30-45 degrees.', 'Hold dumbbells at shoulder width, palms forward.', 'Lower dumbbells to chest level in a controlled motion.', 'Press up until arms nearly straight. Keep back flat against bench.'],
            alternatives: [
              {
                name: 'Incline Barbell Press', sets: '3 x 12 reps', calBurn: '~38-48 kcal',
                note: 'Barbell on incline bench. More stable, can load more weight than dumbbells.',
                instr: ['Set bench to 30-45 degrees, rack bar slightly lower than arms-length.', 'Grip slightly wider than shoulder-width.', 'Lower bar to upper chest.', 'Press back up to full arm extension.']
              },
              {
                name: 'Cable Chest Fly', sets: '3 x 12 reps', calBurn: '~28-38 kcal',
                note: 'Cable provides constant tension. Pure chest isolation with zero shoulder strain. Best if shoulder hurts.',
                instr: ['Set both cables at shoulder height. Stand in the middle.', 'Hold handles, lean forward slightly with soft elbow bend.', 'Bring hands together in front of chest in a wide arc.', 'Slowly return with control. Feel the stretch at full extension.']
              },
            ]
          },
        ]
      },
      {
        label: 'Isolation Exercises',
        exs: [
          {
            name: 'Cable Lateral Raises', sets: '3 x 15 reps',
            note: 'Much safer for rotator cuff than dumbbell lateral raises. Always use cables for shoulder work.',
            gif: 'lateral_raise', calBurn: '~25-35 kcal',
            instr: ['Stand sideways to cable machine with handle on low pulley.', 'Raise arm out to side until parallel to floor.', 'Lower slowly - 3 seconds down.', 'Do not shrug shoulders. Control the movement.'],
            alternatives: [
              {
                name: 'Machine Lateral Raises', sets: '3 x 15 reps', calBurn: '~22-32 kcal',
                note: 'Seated machine enforces correct form. Most shoulder-safe option. Zero risk of compensating.',
                instr: ['Adjust seat so pivot point aligns with shoulder joint.', 'Place elbows on pads (or hold handles).', 'Raise arms out to shoulder height.', 'Lower slowly in 3 seconds. Keep torso still.']
              },
              {
                name: 'Dumbbell Lateral Raises', sets: '3 x 15 reps', calBurn: '~22-30 kcal',
                note: 'Classic shoulder exercise. Use light weight. Slight forward lean reduces impingement.',
                instr: ['Stand holding light dumbbells at sides.', 'Raise arms out to sides until parallel to floor.', 'Lead with elbows, not hands - slight internal rotation.', 'Lower slowly. Never shrug or swing.']
              },
            ]
          },
          {
            name: 'Cable Face Pulls', sets: '4 x 15 reps',
            note: 'PRIORITY: Do this EVERY session. Rebuilds rotator cuff and rear delts. Non-negotiable.',
            gif: 'face_pull', calBurn: '~20-30 kcal',
            instr: ['Set cable at face height with rope attachment.', 'Pull rope toward face, elbows flaring out to sides.', 'At end position, externally rotate - hands go wide past ears.', 'Hold 1 second. Return slowly.'],
            alternatives: [
              {
                name: 'Band Face Pulls', sets: '4 x 15 reps', calBurn: '~18-26 kcal',
                note: 'Resistance band version. Can do anywhere. Same rotator cuff benefit as cable version.',
                instr: ['Anchor band at face height on a pole or door.', 'Hold both ends, step back until band has tension.', 'Pull toward face with elbows flaring high and wide.', 'Externally rotate at end - hands go past ears. Hold 1 second.']
              },
              {
                name: 'Rear Delt Fly Machine', sets: '4 x 15 reps', calBurn: '~18-25 kcal',
                note: 'Seated pec-deck machine in reverse. Targets rear delts and rotator cuff equally well.',
                instr: ['Sit facing the pec-deck machine.', 'Set handles in front of you, grip both handles.', 'Pull arms back and wide until arms are in line with shoulders.', 'Hold 1 second at back. Return slowly.']
              },
            ]
          },
          {
            name: 'Tricep Rope Pushdown', sets: '3 x 12 reps',
            note: 'Keep elbows locked to sides throughout. Squeeze triceps hard at the bottom.',
            gif: 'tricep_push', calBurn: '~25-35 kcal',
            instr: ['Stand at cable machine with rope attachment set high.', 'Elbows at 90 degrees and tucked to sides.', 'Push rope down until arms fully extended. Spread rope apart slightly at bottom.', 'Return slowly. Elbows stay pinned to sides throughout.'],
            alternatives: [
              {
                name: 'Tricep V-Bar Pushdown', sets: '3 x 12 reps', calBurn: '~25-33 kcal',
                note: 'V-bar attachment allows slightly different wrist angle. Some find this more comfortable.',
                instr: ['Attach V-bar to high cable pulley.', 'Grip with palms facing down, elbows at sides.', 'Push bar down to full extension.', 'Squeeze triceps at bottom. Return slowly.']
              },
              {
                name: 'Bench Dips', sets: '3 x 12 reps', calBurn: '~28-38 kcal',
                note: 'Hands on bench behind you, feet on floor or elevated. Bodyweight tricep. Skip if shoulder flares.',
                instr: ['Sit on edge of bench, hands gripping the edge beside hips.', 'Slide off bench, lower body by bending elbows.', 'Go until upper arm is parallel to floor.', 'Push back up. Keep torso close to bench.']
              },
            ]
          },
          {
            name: 'Overhead Tricep Extension (Cable)', sets: '3 x 12 reps',
            note: 'Use cable - gentler on shoulder than dumbbell overhead. Face away from machine.',
            gif: 'tricep_push', calBurn: '~25-35 kcal',
            instr: ['Face away from cable machine, rope attachment set low.', 'Hold rope overhead with both hands, elbows bent beside ears.', 'Extend arms forward and up until straight.', 'Return slowly. Keep upper arms stationary - only forearms move.'],
            alternatives: [
              {
                name: 'Skull Crushers (EZ Bar)', sets: '3 x 12 reps', calBurn: '~28-38 kcal',
                note: 'Lie on bench, lower bar toward forehead. Intense long head tricep isolation. Use light weight first.',
                instr: ['Lie on bench, hold EZ bar with narrow grip overhead.', 'Keeping upper arms vertical, bend only at elbows.', 'Lower bar toward forehead (or behind head).', 'Extend elbows back to start. Upper arms do not move.']
              },
              {
                name: 'Dumbbell Overhead Extension', sets: '3 x 12 reps', calBurn: '~25-35 kcal',
                note: 'Hold one dumbbell with both hands overhead. Simple setup, full tricep stretch.',
                instr: ['Sit or stand, hold one dumbbell vertically with both hands overhead.', 'Bend at elbows, lower dumbbell behind head.', 'Extend back up. Upper arms stay beside ears.', 'Control the descent - do not drop weight.']
              },
            ]
          },
        ]
      },
      {
        label: 'Cardio Finisher',
        exs: [
          {
            name: 'Treadmill Incline Walk', sets: '15 min / 5.5-6 km/h / 5 deg incline',
            note: 'Zone 2 fat-burning cardio. Heart rate at 120-135 bpm. You should be able to hold a conversation.',
            gif: 'treadmill', calBurn: '~90-110 kcal',
            instr: ['Set treadmill to 5 degree incline and speed 5.5-6 km/h.', 'Walk with good posture. Do not lean on handrails.', 'Maintain steady pace for full 15 minutes.', 'This burns more fat than flat walking at same speed.'],
            alternatives: [
              {
                name: 'Elliptical Trainer', sets: '15 min / moderate resistance', calBurn: '~100-120 kcal',
                note: 'Zero impact on joints. Full body movement. Great if knees or shins are sore.',
                instr: ['Set resistance to moderate level.', 'Use both arms and legs actively.', 'Maintain steady pace at 65-70% max heart rate.', 'Stay in zone 2 - you should be able to speak in full sentences.']
              },
              {
                name: 'Stairmaster', sets: '12 min / moderate pace', calBurn: '~95-115 kcal',
                note: 'Higher calorie burn than flat cardio. Excellent glute and quad activation.',
                instr: ['Set speed to levels 6-8 out of 20.', 'Do not lean on handrails - use for balance only.', 'Take full steps with whole foot on each step.', 'Maintain upright posture throughout.']
              },
            ]
          },
        ]
      },
    ]
  },
  {
    day: 'Tue', tag: 'Cardio', tc: 'tc',
    title: 'Cardio + Core Day',
    dur: '45-50 min', split: 'Cardio + Core', focus: 'Fat Burn / Stamina / Core Stability',
    groups: [
      {
        label: 'Warm-up',
        exs: [
          {
            name: 'Light Jog or Cycling', sets: '5 min easy',
            note: 'Gradual heart rate elevation before sustained cardio.',
            gif: 'treadmill', calBurn: '~30-40 kcal',
            instr: ['Start at very easy pace - 4-5 km/h jog or easy bike.', 'Breathe naturally and let heart rate rise gradually.']
          },
        ]
      },
      {
        label: 'Main Cardio - LISS (25-30 min)',
        exs: [
          {
            name: 'Treadmill or Elliptical', sets: '25-30 min / 65-70% max HR',
            note: 'Keep HR at 120-135 bpm. Fat oxidation sweet spot. You should be able to speak full sentences.',
            gif: 'treadmill', calBurn: '~180-220 kcal',
            instr: ['Set treadmill to moderate pace or elliptical to moderate resistance.', 'Maintain consistent effort throughout. Do not sprint then walk.', 'Stay in HR zone 2 (120-135 bpm) the entire time.'],
            alternatives: [
              {
                name: 'Stationary Bike', sets: '25-30 min / moderate resistance', calBurn: '~160-200 kcal',
                note: 'Zero impact on joints. Best option on days with sore back or knees.',
                instr: ['Seat height: knee slightly bent at bottom of pedal stroke.', 'Set moderate resistance - working but not gasping.', 'Maintain 80-90 RPM cadence. Keep back straight.', 'Stay in zone 2 - comfortable sustained effort.']
              },
              {
                name: 'Rowing Machine', sets: '20-25 min / moderate pace', calBurn: '~170-210 kcal',
                note: 'Full body LISS cardio. Works back, core, and legs simultaneously. Low joint impact.',
                instr: ['Sequence: legs push first, then lean back, then pull arms.', 'Return: extend arms, lean forward, bend knees.', 'Maintain 22-24 strokes per minute at moderate effort.', 'Do not yank with lower back.']
              },
            ]
          },
          {
            name: 'Stationary Bike (alternate weeks)', sets: '25 min / moderate resistance',
            note: 'Low impact - excellent on bad back days. Alternate with treadmill each week.',
            gif: 'treadmill', calBurn: '~150-185 kcal',
            instr: ['Set seat height so knee is slightly bent at bottom of pedal stroke.', 'Moderate resistance - you should be working but not gasping.', 'Maintain 80-90 RPM cadence. Keep back straight.'],
            alternatives: [
              {
                name: 'Treadmill', sets: '25 min / 5-6 km/h flat', calBurn: '~160-190 kcal',
                note: 'Classic steady state cardio. Walk at brisk pace or light jog.',
                instr: ['Set speed to comfortable walking/jogging pace.', 'Maintain consistent effort throughout.', 'Arms swing naturally. Breathe rhythmically.', 'Stay in zone 2 heart rate throughout.']
              },
              {
                name: 'Elliptical Trainer', sets: '25 min / moderate resistance', calBurn: '~165-200 kcal',
                note: 'Zero-impact full body cardio. Great alternative to both bike and treadmill.',
                instr: ['Use both arms and legs actively for full body burn.', 'Vary forward and backward to target different muscles.', 'Moderate resistance throughout.', 'Maintain steady zone 2 heart rate.']
              },
            ]
          },
        ]
      },
      {
        label: 'Core Circuit - 3 Rounds',
        exs: [
          {
            name: 'Plank', sets: '30-45 sec hold',
            note: 'Flat back like a tabletop. Breathe normally. Progress to 60 seconds over the weeks.',
            gif: 'plank', calBurn: '~10-15 kcal',
            instr: ['Forearms on floor, elbows under shoulders.', 'Body in straight line from head to heels.', 'Engage core - pull navel toward spine.', 'Do not let hips sag or rise. Breathe steadily.'],
            alternatives: [
              {
                name: 'Ab Wheel Rollout', sets: '3 x 8-10 reps', calBurn: '~15-22 kcal',
                note: 'More challenging core exercise. Start from knees. Do not let lower back arch.',
                instr: ['Kneel with ab wheel in hands directly below shoulders.', 'Roll wheel forward slowly until arms extended.', 'Keep core braced - do not let hips sag.', 'Pull wheel back using core and lats.']
              },
              {
                name: 'Swiss Ball Plank', sets: '3 x 30-40 sec', calBurn: '~12-18 kcal',
                note: 'Elbows on ball instead of floor. Instability increases core demand significantly.',
                instr: ['Kneel before Swiss ball, place forearms on ball.', 'Extend body to plank position, toes on floor.', 'Resist any rolling or tilting of the ball.', 'Breathe steadily. Progress by holding longer.']
              },
            ]
          },
          {
            name: 'Dead Bug', sets: '10 reps each side',
            note: 'Perfect for lower back stiffness rehab. Press lower back firmly to floor the entire time.',
            gif: 'dead_bug', calBurn: '~10-15 kcal',
            instr: ['Lie on back, arms pointing to ceiling, knees at 90 degrees in the air.', 'Press lower back FIRMLY into floor - maintain this throughout.', 'Slowly extend right arm overhead and left leg out simultaneously.', 'Return to start. Repeat with left arm and right leg.'],
            alternatives: [
              {
                name: 'Pallof Press', sets: '3 x 10 each side', calBurn: '~12-18 kcal',
                note: 'Anti-rotation core exercise with cable. Builds deep core stability. Great for back health.',
                instr: ['Set cable at chest height. Stand sideways to machine.', 'Hold handle at chest with both hands.', 'Press hands straight out in front - resist rotation.', 'Hold 2 seconds. Return. Complete reps then switch sides.']
              },
              {
                name: 'Hollow Body Hold', sets: '3 x 20-30 sec', calBurn: '~10-14 kcal',
                note: 'Lower back pressed to floor, arms and legs extended low. Advanced core stability.',
                instr: ['Lie on back, press lower back firmly into floor.', 'Extend arms overhead and legs low (30-45 degrees from floor).', 'Keep lower back in contact with floor throughout.', 'Breathe steadily. Lower legs increase difficulty.']
              },
            ]
          },
          {
            name: 'Bicycle Crunches', sets: '20 reps each side',
            note: 'Slow and controlled. Feel the oblique contraction. Do not pull your neck.',
            gif: 'bicycle', calBurn: '~15-22 kcal',
            instr: ['Lie on back, hands lightly behind ears.', 'Bring right elbow toward left knee while extending right leg.', 'Alternate sides in a slow, controlled pedaling motion.', 'Focus on rotation - do not just move elbows.'],
            alternatives: [
              {
                name: 'Russian Twists', sets: '3 x 20 reps', calBurn: '~14-20 kcal',
                note: 'Seated, lean back slightly, rotate torso side to side. Keep feet elevated for more difficulty.',
                instr: ['Sit on floor, lean back about 45 degrees, knees bent.', 'Clasp hands together. Lift feet slightly off floor.', 'Rotate torso side to side, touching hands to floor each side.', 'Focus on rotating from the waist, not just moving arms.']
              },
              {
                name: 'Cable Crunches', sets: '3 x 15 reps', calBurn: '~15-22 kcal',
                note: 'Kneeling at high cable with rope. Weighted core exercise. More resistance than bodyweight crunches.',
                instr: ['Kneel at high cable pulley with rope attachment.', 'Hold rope at sides of head.', 'Crunch down, rounding spine, until elbows touch knees.', 'Return slowly - do not use hip flexors.']
              },
            ]
          },
          {
            name: 'Bird Dog', sets: '12 reps each side',
            note: 'Excellent for lower back rehab and core stability. Hold 2 seconds at full extension.',
            gif: 'bird_dog', calBurn: '~12-18 kcal',
            instr: ['On hands and knees. Brace core with spine neutral.', 'Extend right arm forward and left leg back simultaneously.', 'Hold 2 seconds. Resist rotating or tilting.', 'Return and repeat on other side. Move slow and deliberate.'],
            alternatives: [
              {
                name: 'Superman Hold', sets: '3 x 10 reps', calBurn: '~10-15 kcal',
                note: 'Lie face down, extend arms and legs simultaneously. Lower back and glute strength.',
                instr: ['Lie face down, arms extended overhead.', 'Simultaneously lift arms, chest, and legs off floor.', 'Hold at top for 2-3 seconds. Squeeze glutes.', 'Lower slowly. Keep neck neutral throughout.']
              },
              {
                name: 'Quadruped Hip Extension', sets: '3 x 12 each', calBurn: '~10-15 kcal',
                note: 'On hands and knees, extend one leg back. Glute and core activation without spinal loading.',
                instr: ['On hands and knees, core braced, spine neutral.', 'Extend one leg straight back, keep it at hip height.', 'Do not rotate the pelvis. Hip stays square to floor.', 'Hold 2 seconds. Return. Complete reps then switch.']
              },
            ]
          },
        ]
      },
    ]
  },
  {
    day: 'Wed', tag: 'Legs', tc: 'ts',
    title: 'Lower Body - Quads + Hamstrings + Glutes',
    dur: '55-60 min', split: 'Strength', focus: 'Quads / Hamstrings / Glutes / Calves',
    groups: [
      {
        label: 'Warm-up',
        exs: [
          {
            name: 'Hip Circles + Leg Swings', sets: '2 x 10 each direction',
            note: 'Open up hip flexors before squatting. Essential to do this.',
            gif: 'cat_cow', calBurn: '~8-12 kcal',
            instr: ['Stand on one leg, swing other leg forward/back 10 times.', 'Do hip circles: hands on hips, rotate hips in large circles. 10 each direction.', 'Leg swings side-to-side also - 10 each leg.']
          },
          {
            name: 'Bodyweight Squats', sets: '2 x 15 reps',
            note: 'Activates glutes and quads. Go to full depth. Warm up the movement pattern.',
            gif: 'squat', calBurn: '~12-18 kcal',
            instr: ['Feet shoulder-width apart, toes slightly out.', 'Arms extended forward for balance.', 'Squat down until thighs parallel to floor or deeper.', 'Push through heels to stand. Keep chest tall.']
          },
        ]
      },
      {
        label: 'Main Compound Lifts',
        exs: [
          {
            name: 'Barbell Back Squat', sets: '4 x 10 reps',
            note: 'Most powerful fat-burning + muscle building exercise. Squat to parallel. Keep chest tall.',
            gif: 'squat', calBurn: '~65-80 kcal',
            instr: ['Bar on upper traps. Feet shoulder-width, toes 15-30 degrees outward.', 'Take a big breath and brace core tightly.', 'Squat down - knees track over toes, hips go back and down.', 'Go to parallel (thighs horizontal) or deeper.', 'Drive through heels to stand. Exhale at top.'],
            alternatives: [
              {
                name: 'Goblet Squat', sets: '4 x 12 reps', calBurn: '~50-65 kcal',
                note: 'Hold dumbbell at chest. Easier on lower back. Counter-balance allows deeper squat. Great for beginners.',
                instr: ['Hold one heavy dumbbell vertically at chest with both hands.', 'Feet shoulder-width, toes slightly out.', 'Squat deep - elbows should go inside knees at bottom.', 'Drive through heels to stand. Keep chest up.']
              },
              {
                name: 'Hack Squat Machine', sets: '4 x 10 reps', calBurn: '~58-72 kcal',
                note: 'Machine with back pad and shoulder rests. Back fully supported. Great if lower back is sore.',
                instr: ['Position under shoulder pads with back flat against pad.', 'Feet shoulder-width on platform, toes slightly out.', 'Release safety handles. Bend knees to 90 degrees.', 'Push through heels to extend. Do not lock knees at top.']
              },
            ]
          },
          {
            name: 'Romanian Deadlift (RDL)', sets: '4 x 10 reps',
            note: 'Stretches and strengthens hamstrings. Reduces lower back stiffness with consistent practice.',
            gif: 'rdl', calBurn: '~55-70 kcal',
            instr: ['Hold barbell at hip level, shoulder-width grip.', 'Soft bend in knees - maintain throughout.', 'Hinge at hips - push hips BACK, not down.', 'Lower bar along legs until strong hamstring stretch.', 'Drive hips forward to return to standing. Keep back flat.'],
            alternatives: [
              {
                name: 'Dumbbell Romanian Deadlift', sets: '4 x 10 reps', calBurn: '~50-65 kcal',
                note: 'Same movement with dumbbells. More range of motion and easier on lower back than barbell.',
                instr: ['Hold dumbbells in front of thighs, palms facing body.', 'Soft knee bend throughout.', 'Hinge at hips, push them back.', 'Lower dumbbells along legs until deep hamstring stretch.', 'Drive hips forward to return.']
              },
              {
                name: 'Nordic Hamstring Curl', sets: '3 x 8 reps', calBurn: '~30-40 kcal',
                note: 'Anchor feet under a pad or have a partner hold. Lowers body slowly with knees only. Very intense.',
                instr: ['Kneel on soft surface, anchor feet firmly under bench/partner.', 'Body forms a straight line from knee to head.', 'Slowly lower body toward floor using only hamstrings.', 'Use hands to catch yourself when unable to hold.', 'Pull back up or use hands to help return.']
              },
            ]
          },
        ]
      },
      {
        label: 'Accessory Exercises',
        exs: [
          {
            name: 'Leg Press Machine', sets: '3 x 12 reps',
            note: 'Easier on lower back than squats. Push through heels. Do not lock knees at top.',
            gif: 'leg_press', calBurn: '~40-55 kcal',
            instr: ['Sit with back flat against pad, feet shoulder-width on platform.', 'Release safety handles. Bend knees to 90 degrees.', 'Push platform away through heels and mid-foot.', 'Lower slowly in 2-3 seconds, push up explosively.'],
            alternatives: [
              {
                name: 'Hack Squat Machine', sets: '3 x 12 reps', calBurn: '~42-55 kcal',
                note: 'Different angle of loading than leg press. Very high quad activation. Back is fully supported.',
                instr: ['Position under shoulder pads, feet mid-platform.', 'Lower under control to 90 degrees.', 'Push through heels to extend.', 'Do not fully lock knees at top.']
              },
              {
                name: 'Bulgarian Split Squat', sets: '3 x 10 each leg', calBurn: '~45-60 kcal',
                note: 'Rear foot on bench. Single-leg exercise. Challenging but very effective for glutes and quads.',
                instr: ['Place rear foot on bench behind you. Front foot far enough forward.', 'Hold dumbbells at sides or hands on hips.', 'Lower front knee toward floor. Torso stays upright.', 'Drive through front heel to return. Keep front knee over ankle.']
              },
            ]
          },
          {
            name: 'Lying Leg Curl Machine', sets: '3 x 12 reps',
            note: 'Full range of motion. Squeeze hamstrings at top. Lower slowly for 3 seconds.',
            gif: 'leg_curl', calBurn: '~30-40 kcal',
            instr: ['Lie face down on machine, pad behind ankles.', 'Curl legs up toward glutes in a smooth arc.', 'Pause briefly at top and squeeze hamstrings.', 'Lower slowly (3 seconds). Keep hips on pad.'],
            alternatives: [
              {
                name: 'Seated Leg Curl Machine', sets: '3 x 12 reps', calBurn: '~30-40 kcal',
                note: 'Seated version targets slightly different hamstring angle. More comfortable for some people.',
                instr: ['Sit with back against pad. Place ankles under roller.', 'Curl lower legs down toward floor.', 'Squeeze hamstrings at bottom of movement.', 'Return slowly in 3 seconds.']
              },
              {
                name: 'Swiss Ball Hamstring Curl', sets: '3 x 12 reps', calBurn: '~28-38 kcal',
                note: 'Lie on back, heels on Swiss ball, curl ball toward hips. Works core and hamstrings together.',
                instr: ['Lie on back, heels on Swiss ball, arms at sides.', 'Lift hips off floor so body is in straight line.', 'Curl ball toward hips by bending knees.', 'Extend legs back out. Keep hips raised throughout.']
              },
            ]
          },
          {
            name: 'Walking Lunges', sets: '3 x 12 each leg',
            note: 'Burns significant calories. Keep torso upright. Front knee must stay above ankle.',
            gif: 'lunge', calBurn: '~40-55 kcal',
            instr: ['Stand with dumbbells in hands (optional).', 'Step forward with right foot, lower left knee toward floor.', 'Front knee should be directly over ankle, not past toes.', 'Push off front foot to step forward. Keep torso upright.'],
            alternatives: [
              {
                name: 'Reverse Lunges', sets: '3 x 12 each leg', calBurn: '~38-52 kcal',
                note: 'Step backward instead of forward. Easier on knees. Same muscle activation. Good for knee issues.',
                instr: ['Stand holding dumbbells. Step one foot back.', 'Lower back knee toward floor while keeping front shin vertical.', 'Front knee stays over ankle - this is the key difference.', 'Push through front heel to return. Repeat other side.']
              },
              {
                name: 'Bulgarian Split Squat', sets: '3 x 10 each leg', calBurn: '~42-58 kcal',
                note: 'Rear foot on bench. Maximum single-leg challenge. Best exercise for glute development.',
                instr: ['Place rear foot on bench behind you, front foot forward.', 'Hold dumbbells at sides.', 'Lower front knee toward floor, keep torso upright.', 'Drive through front heel to return.']
              },
            ]
          },
          {
            name: 'Standing Calf Raises', sets: '3 x 15 reps',
            note: 'Full range. Pause 1 second at top. Use the calf raise machine or edge of a step.',
            gif: 'calf', calBurn: '~15-22 kcal',
            instr: ['Stand with balls of feet on edge of step.', 'Lower heels as far as possible for full stretch.', 'Rise up onto toes as high as possible.', 'Hold top position for 1 second. Lower slowly.'],
            alternatives: [
              {
                name: 'Seated Calf Raise Machine', sets: '3 x 15 reps', calBurn: '~14-20 kcal',
                note: 'Targets soleus (deeper calf muscle) due to bent knee position. Complements standing raises.',
                instr: ['Sit on machine, pads on lower thighs.', 'Ball of foot on platform edge, heel hanging down.', 'Rise up onto toes as high as possible.', 'Hold 1 second. Lower slowly for full stretch.']
              },
              {
                name: 'Single-Leg Calf Raise', sets: '3 x 15 each', calBurn: '~14-20 kcal',
                note: 'Bodyweight on one leg. Doubles the load compared to two-leg version. No machine needed.',
                instr: ['Stand on one foot on edge of step.', 'Hold a support lightly for balance.', 'Full range - from deep stretch to full toe rise.', 'Hold top 1 second. Do all reps then switch legs.']
              },
            ]
          },
        ]
      },
      {
        label: 'Cardio Finisher',
        exs: [
          {
            name: 'Stairmaster / Step Machine', sets: '12 min / moderate pace',
            note: 'One of the highest calorie burn finishers in the gym. Also activates glutes strongly.',
            gif: 'stairmaster', calBurn: '~85-105 kcal',
            instr: ['Set machine to moderate speed (levels 6-8 out of 20).', 'Do not lean heavily on handrails - use for balance only.', 'Take full steps with foot fully on step.', 'Maintain upright posture. Engage core. 12 minutes steady.'],
            alternatives: [
              {
                name: 'Treadmill Incline Walk', sets: '15 min / 5.5 km/h / 8-10 deg', calBurn: '~95-115 kcal',
                note: 'Same fat-burn effect at high incline. Good alternative if stairmaster is occupied.',
                instr: ['Set to 8-10 degree incline, 5.5 km/h speed.', 'Walk with upright posture, no handrail leaning.', 'Maintain steady pace for full 15 minutes.', 'Higher incline = more glute activation than flat walking.']
              },
              {
                name: 'Jump Rope', sets: '10 min continuous', calBurn: '~100-125 kcal',
                note: 'Very high calorie burn per minute. Great for conditioning and calf strength.',
                instr: ['Jump with both feet, slight bend in knees on landing.', 'Wrists do the rotating, not arms.', 'Land softly on balls of feet.', 'If tired, slow the pace but keep moving for full 10 minutes.']
              },
            ]
          },
        ]
      },
    ]
  },
  {
    day: 'Thu', tag: 'Rest', tc: 'tr',
    title: 'Active Recovery Day',
    dur: '20-30 min light', split: 'Recovery', focus: 'Mobility / Stretching / Walk',
    groups: [
      {
        label: 'Active Recovery Protocol',
        exs: [
          {
            name: 'Outdoor Walk - aim 8-10k steps', sets: '30-40 min',
            note: 'Fresh air and Zone 1 gentle movement. This is NOT a workout. Enjoy it.',
            gif: 'treadmill', calBurn: '~120-160 kcal',
            instr: ['Walk at comfortable conversation pace.', 'Focus on breathing and relaxing.', 'Use this time to listen to music or podcasts.', 'No target pace - just move and recover.']
          },
          {
            name: 'Full Body Stretching', sets: '10-15 min',
            note: 'Focus: hamstrings, hip flexors, chest, shoulders, neck. Hold each stretch 30+ seconds.',
            gif: 'stretch', calBurn: '~20-30 kcal',
            instr: ['Hold each stretch 30-45 seconds.', 'Never stretch to pain - discomfort only.', 'Key: standing quad, seated hamstring, doorway chest, neck side stretch, hip flexor lunge.', 'Breathe deeply and relax into each position.']
          },
          {
            name: 'Foam Rolling', sets: '5-10 min',
            note: 'Upper back, IT band, calves, quads. Roll slowly and pause on tight spots for 5-10 seconds.',
            gif: 'foam_roll', calBurn: '~15-22 kcal',
            instr: ['Roll each area slowly at 1 inch per second.', 'When you find a tight spot, stop and hold for 5-10 seconds.', 'Key areas: upper/mid back, IT band (side of thigh), calves, quads.', 'Apply comfortable pressure - not excruciating.']
          },
        ]
      },
      {
        label: 'Optional',
        exs: [
          {
            name: 'Beginner Yoga - 10-15 min', sets: 'Any YouTube beginner video',
            note: 'Especially good for neck and back stiffness. Search: yoga for back pain beginners.',
            gif: 'stretch',
            instr: ['Search YouTube for yoga for lower back pain beginners or yin yoga neck and shoulders.', 'Follow along at your own pace.', 'Child pose, pigeon pose, supine spinal twist are all excellent.', 'Even 10 minutes 2-3 times per week makes a difference.']
          },
        ]
      },
    ]
  },
  {
    day: 'Fri', tag: 'Pull', tc: 'ts',
    title: 'Upper Body Pull - Back + Biceps',
    dur: '55-60 min', split: 'Strength', focus: 'Back / Biceps / Rear Delts / Posture',
    groups: [
      {
        label: 'Warm-up',
        exs: [
          {
            name: 'Band Pull-Aparts + Face Pulls', sets: '2 x 15 each',
            note: 'Always warm up pulling muscles before loading them with heavy weight.',
            gif: 'face_pull', calBurn: '~10-15 kcal',
            instr: ['Band pull-aparts: hold band in front at shoulder height, pull apart to chest level.', 'Face pulls with band: anchor at face height, pull toward face with external rotation.', 'Warm up both patterns before picking up heavier weights.']
          },
          {
            name: 'Cat-Cow + Thoracic Extensions', sets: '2 x 10',
            note: 'Open up the thoracic spine before rows.',
            gif: 'cat_cow', calBurn: '~8-12 kcal',
            instr: ['Cat-cow as described on Monday.', 'Add thoracic extension: sit on heels, extend arms forward, let upper back open up.', 'This prepares the spine for heavy pulling movements.']
          },
        ]
      },
      {
        label: 'Main Compound Lifts',
        exs: [
          {
            name: 'Lat Pulldown', sets: '4 x 10 reps',
            note: 'Full stretch at top. Pull elbows down and back - not arms down. Squeeze lats at bottom.',
            gif: 'lat_pull', calBurn: '~50-65 kcal',
            instr: ['Sit with knees under pad. Grip bar wider than shoulders.', 'Lean back slightly (10-15 degrees). Look up.', 'Pull bar to upper chest - lead with elbows, not hands.', 'Squeeze shoulder blades together at bottom.', 'Slowly return to full arm extension. Feel the lat stretch.'],
            alternatives: [
              {
                name: 'Pull-ups / Assisted Pull-ups', sets: '4 x 8-10 reps', calBurn: '~55-70 kcal',
                note: 'Best exercise for back width. Use assisted machine if needed. Work toward unassisted over time.',
                instr: ['Grip bar slightly wider than shoulder-width, palms away.', 'Hang with full arm extension. Brace core.', 'Pull chest to bar, leading with elbows down and back.', 'Lower slowly to full hang. Do not kip or swing.']
              },
              {
                name: 'Cable Straight-Arm Pulldown', sets: '4 x 12 reps', calBurn: '~40-52 kcal',
                note: 'Arms stay straight throughout. Pure lat isolation with minimal bicep involvement.',
                instr: ['Stand at high cable, slight forward lean.', 'Hold bar with straight arms at eye level.', 'Pull bar down in arc to hips, keeping arms straight.', 'Squeeze lats at bottom. Return slowly.']
              },
            ]
          },
          {
            name: 'Seated Cable Row', sets: '4 x 10 reps',
            note: 'Squeeze shoulder blades together at end of each rep. Improves posture and reduces back pain.',
            gif: 'cable_row', calBurn: '~45-60 kcal',
            instr: ['Sit with slight bend in knees, back straight.', 'Grip handles, arms extended - this is starting position.', 'Row handle to lower abdomen - pull elbows back past body.', 'Squeeze shoulder blades hard at the end.', 'Return slowly - full arm extension each rep.'],
            alternatives: [
              {
                name: 'Barbell Bent-Over Row', sets: '4 x 10 reps', calBurn: '~55-70 kcal',
                note: 'Hinge at hips 45 degrees, row bar to lower chest. More compound, higher muscle activation.',
                instr: ['Hinge forward at hips 45 degrees, back flat.', 'Grip bar shoulder-width, arms hanging.', 'Row bar to lower chest, leading elbows back.', 'Squeeze shoulder blades at top. Lower with control.']
              },
              {
                name: 'T-Bar Row Machine', sets: '4 x 10 reps', calBurn: '~48-62 kcal',
                note: 'Chest pad supports the torso. Lower back fatigue eliminated. Great for focusing on the back.',
                instr: ['Adjust chest pad. Straddle the bar, grip handles.', 'Chest against pad throughout.', 'Row handles to chest, squeezing shoulder blades.', 'Lower to full arm extension each rep.']
              },
            ]
          },
        ]
      },
      {
        label: 'Accessory Exercises',
        exs: [
          {
            name: 'Single Arm Dumbbell Row', sets: '3 x 12 each side',
            note: 'Brace core. Big range of motion - elbow drives back, not up. Feel the lat working.',
            gif: 'db_row', calBurn: '~40-52 kcal',
            instr: ['Place one knee and hand on bench for support.', 'Hold dumbbell in free hand, arm hanging.', 'Row dumbbell to hip/lower ribcage - elbow drives back.', 'At top, twist slightly to squeeze lat harder.', 'Lower fully. Keep back flat throughout.'],
            alternatives: [
              {
                name: 'Chest-Supported Row', sets: '3 x 12 reps', calBurn: '~38-50 kcal',
                note: 'Lie face down on incline bench (45 deg). Row dumbbells up. No lower back fatigue at all.',
                instr: ['Set incline bench to 45 degrees. Lie face down.', 'Hold dumbbells, arms hanging down.', 'Row both dumbbells up toward hips.', 'Squeeze shoulder blades hard. Lower with control.']
              },
              {
                name: 'Seal Row', sets: '3 x 12 reps', calBurn: '~38-50 kcal',
                note: 'Lie face down on a high bench, barbell below. Both arms row. No compensating possible.',
                instr: ['Set a flat bench on boxes so barbell can hang below.', 'Lie face down, grip barbell with both hands.', 'Row bar to chest, squeezing shoulder blades.', 'Lower to full hang. Strict form only - no body movement.']
              },
            ]
          },
          {
            name: 'Cable Face Pulls', sets: '4 x 15 reps',
            note: 'Every session. Non-negotiable shoulder health and rotator cuff exercise.',
            gif: 'face_pull', calBurn: '~20-28 kcal',
            instr: ['Set cable to face height with rope.', 'Pull toward face - elbows flare OUT high.', 'At end: externally rotate hands wide past ears.', 'Hold 1 second. Feel the rear delts and rotator cuff work.'],
            alternatives: [
              {
                name: 'Band Pull-Aparts', sets: '4 x 15 reps', calBurn: '~15-22 kcal',
                note: 'Hold band at shoulder height and pull apart. Rear delt and rotator cuff activation.',
                instr: ['Hold resistance band in both hands at shoulder height, arms forward.', 'Pull band apart horizontally until arms are in line.', 'Squeeze shoulder blades together at end.', 'Return slowly. Repeat without rest.']
              },
              {
                name: 'Rear Delt Fly (Dumbbell)', sets: '4 x 15 reps', calBurn: '~18-25 kcal',
                note: 'Bent over with dumbbells, fly arms out to sides. Isolates rear deltoids effectively.',
                instr: ['Hinge forward at hips 45-60 degrees, back flat.', 'Hold light dumbbells hanging down.', 'Fly arms out to sides in a wide arc.', 'Squeeze rear delts at top. Lower slowly.']
              },
            ]
          },
          {
            name: 'Barbell Bicep Curls', sets: '3 x 12 reps',
            note: 'Full range. No swinging the body. Squeeze at the top. Elbows stay at sides.',
            gif: 'bicep_curl', calBurn: '~25-35 kcal',
            instr: ['Stand with barbell, underhand grip.', 'Elbows pinned to sides - they should not move.', 'Curl weight up by bending elbows only.', 'Squeeze biceps hard at top.', 'Lower slowly (3 seconds). Do not just drop weight.'],
            alternatives: [
              {
                name: 'Dumbbell Bicep Curls', sets: '3 x 12 reps', calBurn: '~24-34 kcal',
                note: 'Each arm works independently. Supinate (rotate) wrist at top for full bicep contraction.',
                instr: ['Stand holding dumbbells at sides, palms forward.', 'Curl one arm up, rotating palm up at top.', 'Squeeze bicep. Lower slowly.', 'Alternate arms or do both simultaneously.']
              },
              {
                name: 'Cable Curls', sets: '3 x 12 reps', calBurn: '~22-32 kcal',
                note: 'Cable provides constant tension throughout the full range. No dead spot at the top.',
                instr: ['Stand at low cable pulley with bar or rope attachment.', 'Grip with palms up, elbows at sides.', 'Curl up to shoulder height. Do not lean back.', 'Slowly return - feel cable pull the whole way down.']
              },
            ]
          },
          {
            name: 'Hammer Curls', sets: '3 x 12 reps',
            note: 'Neutral grip (palms facing in). Works brachialis for thicker overall arms.',
            gif: 'hammer_curl', calBurn: '~20-30 kcal',
            instr: ['Hold dumbbells at sides, palms facing body.', 'Keep this neutral grip throughout - do not rotate.', 'Curl up to shoulder height.', 'Squeeze at top, lower slowly.'],
            alternatives: [
              {
                name: 'Incline Dumbbell Curls', sets: '3 x 12 reps', calBurn: '~22-30 kcal',
                note: 'Sit on incline bench, arms hang behind body. Creates deep bicep stretch at bottom.',
                instr: ['Set bench to 45-60 degrees. Sit with back against it.', 'Arms hang straight down behind line of body.', 'Curl dumbbells up without letting upper arms swing forward.', 'Lower fully. The deep stretch is the key benefit.']
              },
              {
                name: 'Concentration Curls', sets: '3 x 12 each', calBurn: '~18-26 kcal',
                note: 'Elbow braced on inner thigh. Maximum isolation - zero cheating possible. Peak contraction.',
                instr: ['Sit on bench, lean forward. Elbow of working arm on inner thigh.', 'Hold dumbbell, arm hanging down.', 'Curl up slowly, squeeze hard at top.', 'Lower fully. Do not move the upper arm.']
              },
            ]
          },
        ]
      },
      {
        label: 'Cardio Finisher',
        exs: [
          {
            name: 'Rowing Machine', sets: '10 min / moderate pace',
            note: 'Full body, low impact, excellent calorie burn. Perfect post-pull day finisher.',
            gif: 'rowing', calBurn: '~70-90 kcal',
            instr: ['Sit on rower, feet strapped in, knees bent.', 'Sequence: legs push, then lean back, then pull arms to lower chest.', 'Return: extend arms, lean forward, bend knees.', 'Maintain steady rhythm. Do not yank with back.', 'Aim for 20-22 strokes per minute at moderate effort.'],
            alternatives: [
              {
                name: 'Ski Erg', sets: '10 min / moderate pace', calBurn: '~75-95 kcal',
                note: 'Cable pull-based machine. Upper body dominant cardio. Great post-pull day finisher.',
                instr: ['Stand facing machine, grab handles overhead.', 'Pull handles down to hips in a smooth arc.', 'Hinge at hips slightly as arms pull down.', 'Return handles slowly. Maintain rhythm.']
              },
              {
                name: 'Assault Bike', sets: '10 min / moderate pace', calBurn: '~85-110 kcal',
                note: 'Arms + legs simultaneously. Very high calorie burn. Great conditioning tool.',
                instr: ['Sit on bike, hands on moving handles.', 'Push and pull handles while pedaling legs.', 'Moderate steady effort - not max sprint.', 'Stay at zone 2 heart rate for 10 minutes.']
              },
            ]
          },
        ]
      },
    ]
  },
  {
    day: 'Sat', tag: 'HIIT', tc: 'th',
    title: 'HIIT + Full Body Functional Training',
    dur: '50-55 min', split: 'HIIT + Functional', focus: 'Max Fat Burn / Conditioning / Stamina',
    groups: [
      {
        label: 'Warm-up',
        exs: [
          {
            name: 'Jump Rope or Light Jog', sets: '3 min',
            note: 'Get heart rate up quickly to prepare for HIIT intensity.',
            gif: 'treadmill', calBurn: '~25-35 kcal',
            instr: ['Jump rope for 3 min OR jog at easy pace.', 'Get heart rate to 100-110 bpm before starting HIIT.', 'Do 10 arm circles each direction and 10 leg swings each side.']
          },
        ]
      },
      {
        label: 'HIIT Circuit - 4 Rounds / 40 sec ON / 20 sec REST',
        exs: [
          {
            name: 'Jump Squats', sets: '40 sec ON / 20 sec REST',
            note: 'Highest calorie-burning bodyweight exercise. Land softly - absorb force with bent knees.',
            gif: 'jump_squat', calBurn: '~45-60 kcal (4 rounds)',
            instr: ['Feet shoulder width, toes slightly out.', 'Squat down to parallel.', 'Explode upward as high as possible.', 'Land softly with bent knees - do not land stiff-legged.', 'Immediately transition into next squat.'],
            alternatives: [
              {
                name: 'Box Jumps', sets: '40 sec ON / 20 sec REST', calBurn: '~42-55 kcal (4 rounds)',
                note: 'Jump onto a box or step. Plyometric power. Land softly with bent knees. Step down, never jump down.',
                instr: ['Stand in front of a sturdy box or step.', 'Squat down and swing arms.', 'Explode up onto box, landing softly with both feet.', 'Stand tall on box. Step back down carefully.', 'Repeat immediately.']
              },
              {
                name: 'Squat Thrusters', sets: '40 sec ON / 20 sec REST', calBurn: '~50-65 kcal (4 rounds)',
                note: 'Hold dumbbells at shoulders, squat then press overhead as you stand. Full body power movement.',
                instr: ['Hold dumbbells at shoulder height.', 'Squat down to parallel.', 'Explosively stand and press dumbbells overhead.', 'Lower dumbbells as you go back into squat.']
              },
            ]
          },
          {
            name: 'Mountain Climbers', sets: '40 sec ON / 20 sec REST',
            note: 'Core + cardio combined. Keep hips level - do not pike up or sag.',
            gif: 'mtn_climber', calBurn: '~40-52 kcal (4 rounds)',
            instr: ['Start in push-up position, hands under shoulders.', 'Drive right knee toward chest, then quickly switch to left.', 'Keep hips level - do not bob up and down.', 'Move as fast as possible while maintaining form.'],
            alternatives: [
              {
                name: 'Plank Jacks', sets: '40 sec ON / 20 sec REST', calBurn: '~35-48 kcal (4 rounds)',
                note: 'In plank position, jump feet out and in like jumping jacks. Core stays engaged throughout.',
                instr: ['Start in high plank (arms straight), core tight.', 'Jump feet out wide simultaneously.', 'Jump feet back together.', 'Keep hips level. Move as fast as form allows.']
              },
              {
                name: 'Spider-Man Planks', sets: '40 sec ON / 20 sec REST', calBurn: '~38-50 kcal (4 rounds)',
                note: 'From plank, bring knee to elbow alternating sides. More rotation and hip flexor challenge.',
                instr: ['Start in high plank position.', 'Bring right knee to touch right elbow.', 'Return to plank. Repeat on left side.', 'Alternate continuously. Keep hips low throughout.']
              },
            ]
          },
          {
            name: 'Burpees', sets: '40 sec ON / 20 sec REST',
            note: 'Maximum calories per minute. Modified = step out instead of jump. Still very effective.',
            gif: 'burpee', calBurn: '~55-70 kcal (4 rounds)',
            instr: ['Full: jump feet out to plank, do push-up, jump feet in, jump up.', 'Modified: step feet out, step feet in, stand up (no jump).', 'Focus on moving continuously for the full 40 seconds.', 'This is the hardest exercise - expect to be breathing hard.'],
            alternatives: [
              {
                name: 'Modified Burpees (No Jump)', sets: '40 sec ON / 20 sec REST', calBurn: '~42-55 kcal (4 rounds)',
                note: 'Step out to plank, do a push-up, step in, then stand. Lower impact but same muscle groups.',
                instr: ['Stand, then squat and place hands on floor.', 'Step one foot back, then the other, to plank.', 'Do a push-up (or skip if exhausted).', 'Step feet forward, stand up. Repeat.']
              },
              {
                name: 'Bear Crawls', sets: '40 sec ON / 20 sec REST', calBurn: '~40-52 kcal (4 rounds)',
                note: 'On hands and feet (knees off floor), move forward and back. Core stability and conditioning.',
                instr: ['Start on all fours, knees just off the floor.', 'Move forward: right hand + left foot, then left hand + right foot.', 'Keep knees hovering, back flat.', 'Crawl 5 steps forward then 5 steps back in the 40 seconds.']
              },
            ]
          },
          {
            name: 'Kettlebell Swings', sets: '40 sec ON / 20 sec REST',
            note: 'Hip hinge power movement. Glutes drive the swing - not arms. Skip if lower back flares.',
            gif: 'kb_swing', calBurn: '~45-60 kcal (4 rounds)',
            instr: ['Feet slightly wider than shoulders, KB between feet.', 'Hinge at hips, grip KB. Swing it back between legs.', 'Explosively drive hips forward - KB swings up to shoulder height.', 'Arms just guide - hips power the movement.', 'Keep back flat throughout. Never round the lower back.'],
            alternatives: [
              {
                name: 'Dumbbell Swings', sets: '40 sec ON / 20 sec REST', calBurn: '~42-55 kcal (4 rounds)',
                note: 'Same hip hinge swing with a dumbbell. Identical benefit if KB is unavailable.',
                instr: ['Hold one dumbbell with both hands between legs.', 'Hinge at hips and swing dumbbell back.', 'Drive hips forward explosively.', 'Let dumbbell swing up to shoulder height. Arms passive.']
              },
              {
                name: 'Hip Thrust Pulses', sets: '40 sec ON / 20 sec REST', calBurn: '~35-48 kcal (4 rounds)',
                note: 'Glute bridges with rapid small pulses at the top. Intense glute activation. Zero lower back risk.',
                instr: ['Lie on back, feet flat, knees bent.', 'Bridge up until hips are fully extended.', 'At top, do rapid small up-down pulses (2-3 cm range).', 'Keep glutes squeezed hard throughout the 40 seconds.']
              },
            ]
          },
          {
            name: 'High Knees', sets: '40 sec ON / 20 sec REST',
            note: 'Drive knees to waist height. Use arms to pump. Keep core tight throughout.',
            gif: 'high_knees', calBurn: '~35-50 kcal (4 rounds)',
            instr: ['Run in place, driving knees up to waist level.', 'Pump arms aggressively - this drives knee height.', 'Land on balls of feet, not heels.', 'Full 40 seconds without stopping.'],
            alternatives: [
              {
                name: 'Jump Rope', sets: '40 sec ON / 20 sec REST', calBurn: '~40-55 kcal (4 rounds)',
                note: 'Same cardio effect with added coordination challenge. Great calorie burn per minute.',
                instr: ['Jump with both feet, slight knee bend on landing.', 'Wrists rotate the rope - not arms.', 'Land softly on balls of feet.', 'If rope is unavailable, mimic the motion (phantom rope).']
              },
              {
                name: 'Lateral Shuffles', sets: '40 sec ON / 20 sec REST', calBurn: '~30-42 kcal (4 rounds)',
                note: 'Side-to-side shuffle in a low squat stance. Agility and hip abductor work.',
                instr: ['Stand with knees bent in athletic stance.', 'Shuffle 3-4 steps to the right staying low.', 'Then shuffle 3-4 steps to the left.', 'Stay in low position throughout. Move as fast as possible.']
              },
            ]
          },
        ]
      },
      {
        label: 'Functional Strength - 2 Sets Each',
        exs: [
          {
            name: 'Goblet Squat', sets: '2 x 15 reps',
            note: 'Hold dumbbell at chest. Deep squat. Great for mobility and legs simultaneously.',
            gif: 'goblet_squat', calBurn: '~28-38 kcal',
            instr: ['Hold dumbbell vertically at chest with both hands.', 'Feet shoulder-width, toes out.', 'Squat down as deep as possible - elbows should go inside knees at bottom.', 'Drive through heels to stand. Keep chest tall.'],
            alternatives: [
              {
                name: 'Dumbbell Sumo Squat', sets: '2 x 15 reps', calBurn: '~28-38 kcal',
                note: 'Wider stance, toes turned out more. Greater inner thigh and glute activation than regular squat.',
                instr: ['Stand with feet wide, toes pointed out 45 degrees.', 'Hold one dumbbell between legs.', 'Squat straight down keeping torso upright.', 'Push through heels to stand.']
              },
              {
                name: 'Wall Sit', sets: '2 x 45 sec hold', calBurn: '~22-30 kcal',
                note: 'Back against wall, hold parallel squat position. Isometric quad endurance. Zero equipment.',
                instr: ['Back flat against wall, feet 2 feet from wall.', 'Slide down until thighs are parallel to floor.', 'Hold position. Arms on thighs or extended forward.', 'Breathe steadily. Push through for the full time.']
              },
            ]
          },
          {
            name: 'Push-ups', sets: '2 x 12 reps',
            note: 'Full range - chest to floor. Modify on knees if needed. Builds chest without shoulder strain.',
            gif: 'pushup', calBurn: '~18-28 kcal',
            instr: ['Hands wider than shoulders, body in straight line.', 'Lower chest to floor - full range - touch the ground.', 'Push back up to start.', 'Modified: same movement but knees on floor.', 'Keep core tight throughout.'],
            alternatives: [
              {
                name: 'Diamond Push-ups', sets: '2 x 10 reps', calBurn: '~18-26 kcal',
                note: 'Hands close together forming a diamond shape. Much more tricep focused than regular push-ups.',
                instr: ['Form a diamond with index fingers and thumbs.', 'Lower chest to hands.', 'Keep elbows close to body as you push up.', 'Modify on knees if needed.']
              },
              {
                name: 'Incline Push-ups', sets: '2 x 12 reps', calBurn: '~15-22 kcal',
                note: 'Hands on elevated surface (bench, wall). Easier variation. More upper chest activation.',
                instr: ['Place hands on bench or step, wider than shoulders.', 'Body in straight line from head to heels.', 'Lower chest to the elevated surface.', 'Push back up. Increase elevation to make easier.']
              },
            ]
          },
          {
            name: 'Dumbbell Deadlift', sets: '2 x 12 reps',
            note: 'Hinge at hips. Back flat. Lighter than barbell version - safe and effective.',
            gif: 'rdl', calBurn: '~25-35 kcal',
            instr: ['Hold dumbbells in front of thighs.', 'Hinge at hips - push them back.', 'Lower weights along legs to mid-shin.', 'Drive hips forward to return to standing.', 'Keep back completely flat throughout.'],
            alternatives: [
              {
                name: 'Sumo Dumbbell Deadlift', sets: '2 x 12 reps', calBurn: '~25-35 kcal',
                note: 'Wide stance, toes out, dumbbells between legs. More inner thigh and glute. Easier on lower back.',
                instr: ['Stand with wide stance, toes angled out 45 degrees.', 'Hold dumbbells between legs.', 'Hinge at hips and bend knees to lower.', 'Drive through heels and squeeze glutes to stand.']
              },
              {
                name: 'Trap Bar Deadlift', sets: '2 x 12 reps', calBurn: '~28-38 kcal',
                note: 'Neutral grip with weight at sides. Most back-friendly deadlift variation. Highly recommended.',
                instr: ['Stand inside trap bar. Grip handles.', 'Hinge at hips and bend knees.', 'Back flat, chest up. Drive through heels to stand.', 'Lower with control. Much easier on lower back than barbell.']
              },
            ]
          },
        ]
      },
      {
        label: 'Cool-down',
        exs: [
          {
            name: 'Walk + Full Body Stretch', sets: '10 min total',
            note: 'Never skip after HIIT. Lowers cortisol. Prevents next-day soreness significantly.',
            gif: 'stretch', calBurn: '~25-35 kcal',
            instr: ['Walk at easy pace for 5 minutes - let heart rate come down.', 'Then spend 5 minutes stretching: quads, hamstrings, hip flexors, shoulders, chest.', 'Hold each stretch 30 seconds.', 'Never stretch cold - always after walking first.']
          },
        ]
      },
    ]
  },
  {
    day: 'Sun', tag: 'Rest', tc: 'tr',
    title: 'Full Rest and Meal Prep Day',
    dur: 'Rest', split: 'Recovery', focus: 'Recovery / Sleep / Prep',
    groups: [
      {
        label: 'Rest Day Protocol',
        exs: [
          {
            name: 'Casual Walk Only', sets: 'No target - move naturally',
            note: 'Do not count this as exercise. Incidental movement only. Your body is building muscle now.',
            gif: 'treadmill',
            instr: ['Walk at completely comfortable, leisurely pace.', 'Enjoy the rest - recovery is when muscle is built.', 'No distance or step targets today.']
          },
          {
            name: 'Sleep 8 Hours Minimum', sets: 'Target: 10pm - 6am',
            note: 'Muscle is built and fat is burned during deep sleep. Growth hormone peaks at night.',
            gif: 'stretch',
            instr: ['Aim for consistent sleep and wake times.', 'Dark, cool room for best sleep quality.', 'No screens 30 min before bed.', 'This is THE most important recovery tool.']
          },
          {
            name: 'Weekly Meal Prep', sets: '30-45 min',
            note: 'Soak chana/rajma/dal Saturday night. Sunday: chop vegetables, prep oats mix.',
            gif: 'stretch',
            instr: ['Soak legumes overnight in water.', 'Sunday: boil and refrigerate soaked dal or rajma.', 'Wash and chop vegetables for 3 days ahead.', 'Measure and pre-pack snacks (makhana, sprouts, almonds).', 'This determines the quality of your entire week.']
          },
        ]
      },
    ]
  },
];

export const dietDays = [
  {
    day: 'Mon', title: 'Monday',
    meals: [
      {
        time: 'Breakfast 7:00-8:00 AM', name: 'Oats Bowl (upgraded)',
        detail: 'Oats 35g dry · Whey protein 20g (+5g) · Toned milk 50ml · Mix seeds 12g · Cocoa powder 7g · Banana 50g · Pomegranate 60g',
        cals: '~410 kcal', change: 'Increased whey by 5g for protein boost. Reduced fruit slightly to save 30 kcal.',
        mMacros: { p: '28g', c: '50g', fiber: '6g' }
      },
      {
        time: 'Mid-Morning 10:30 AM', name: 'Boiled Eggs x2 (NEW)',
        detail: '2 whole eggs boiled · Black pepper + rock salt · Optional: 1 extra egg white',
        cals: '~155 kcal', change: 'Added to hit daily protein target. Eggs raise HDL (good cholesterol).',
        mMacros: { p: '14g', c: '1g', fiber: '0g' }
      },
      {
        time: 'Lunch 1:00-1:30 PM', name: 'Chole + Roti',
        detail: 'Kabuli chana 55g dry · Atta 70g (2 rotis - down from 2.5) · Oil 7g · Onion-cucumber salad 100g',
        cals: '~545 kcal', change: 'Reduced roti from 2.5 to 2 rotis (-120 kcal). Increased salad for volume and fibre.',
        mMacros: { p: '26g', c: '80g', fiber: '13g' }
      },
      {
        time: 'Snack 4:30 PM', name: 'PB Toast + Tea (modified)',
        detail: 'Wheat bread 2 slices 67g · Peanut butter 16g · NO butter · Tea: milk 30ml + stevia (NO sugar)',
        cals: '~270 kcal', change: 'Removed butter (-50 kcal). Removed sugar (-32 kcal). Total savings: 82 kcal.',
        mMacros: { p: '12g', c: '35g', fiber: '3g' }
      },
      {
        time: 'Dinner 7:30-8:00 PM', name: 'Arhar Dal + Rice',
        detail: 'Arhar/Toor dal 70g dry · Rice 45g (down from 55g) · Ghee 7g tadka',
        cals: '~445 kcal', change: 'Reduced rice by 10g (-36 kcal). Dal preserved for protein. Ghee in tadka is fine at 7g.',
        mMacros: { p: '23g', c: '72g', fiber: '6g' }
      },
    ],
    macros: { cals: '1,825', p: '108g', c: '222g', f: '55g' }
  },
  {
    day: 'Tue', title: 'Tuesday',
    meals: [
      {
        time: 'Breakfast 7:00-8:00 AM', name: 'Egg Bhurji + Toast (SWAP)',
        detail: '2 whole eggs + 1 egg white bhurji · Oil 5g · Wheat bread 1 slice 33g · Tea: milk 30ml + stevia',
        cals: '~340 kcal', change: 'Swap from PB toast. Better protein (20g vs 15g). Eggs raise HDL cholesterol.',
        mMacros: { p: '22g', c: '22g', fiber: '2g' }
      },
      {
        time: 'Mid-Morning 10:30 AM', name: 'Sprouts Chaat (NEW)',
        detail: 'Mixed moong/chana sprouts 80g raw · Onion + tomato + cucumber 50g · Lemon juice + chaat masala',
        cals: '~155 kcal', change: 'High protein slow-digesting snack. Great for pre-diabetic blood sugar management.',
        mMacros: { p: '11g', c: '22g', fiber: '5g' }
      },
      {
        time: 'Lunch 1:00-1:30 PM', name: 'Rajma + Rice',
        detail: 'Rajma 55g dry · Rice 55g (down from 60g) · Oil 7g · Onion-cucumber salad 100g',
        cals: '~475 kcal', change: 'Reduced rice by 5g. Rajma is very high protein - keep at 55g. High fibre helps cholesterol.',
        mMacros: { p: '24g', c: '70g', fiber: '10g' }
      },
      {
        time: 'Snack 4:30 PM', name: 'Corn Peanut Chaat + Tea',
        detail: 'Corn kernels 80g · Peanuts 15g · Veggies 50g · Lemon + chaat masala · Tea: milk 30ml + stevia',
        cals: '~200 kcal', change: 'Removed sugar from tea (-32 kcal). Peanuts have heart-healthy monounsaturated fats.',
        mMacros: { p: '7g', c: '28g', fiber: '4g' }
      },
      {
        time: 'Dinner 7:30-8:00 PM', name: 'Paneer Sabzi + Roti',
        detail: 'Paneer 60g · Atta 70g (2 rotis) · Oil 7g · Sabzi veggies (onion, tomato, capsicum) 100g',
        cals: '~490 kcal', change: 'Reduced roti to 2. Increased veggies for fibre and volume. Paneer preserved for protein.',
        mMacros: { p: '22g', c: '60g', fiber: '5g' }
      },
    ],
    macros: { cals: '1,660', p: '106g', c: '206g', f: '58g' }
  },
  {
    day: 'Wed', title: 'Wednesday',
    meals: [
      {
        time: 'Breakfast 7:00-8:00 AM', name: 'Oats Bowl',
        detail: 'Oats 35g · Whey protein 20g · Toned milk 50ml · Mix seeds 12g · Cocoa powder 7g · Banana 50g · Pomegranate 60g',
        cals: '~410 kcal', change: 'Oats = best breakfast for cholesterol (beta-glucan fibre) and blood sugar control.',
        mMacros: { p: '28g', c: '50g', fiber: '6g' }
      },
      {
        time: 'Mid-Morning 10:30 AM', name: 'Roasted Makhana (NEW)',
        detail: 'Roasted makhana 30g · Lightly spiced with black pepper + salt',
        cals: '~100 kcal', change: 'Low-cal, high-fibre snack. Good for cholesterol. Easy to carry anywhere.',
        mMacros: { p: '3g', c: '18g', fiber: '2g' }
      },
      {
        time: 'Lunch 1:00-1:30 PM', name: 'Aloo Gobi + Roti',
        detail: 'Potato 60g raw (down 20g) · Cauliflower 120g (up 20g) · Atta 70g (2 rotis) · Oil 8g · Curd/Raita 80g',
        cals: '~470 kcal', change: 'Reduced potato (high GI - important for pre-diabetic). More cauliflower (low GI + high fibre).',
        mMacros: { p: '18g', c: '70g', fiber: '8g' }
      },
      {
        time: 'Snack 4:30 PM', name: 'PB Toast + Tea (modified)',
        detail: 'Wheat bread 2 slices 67g · Peanut butter 16g · NO butter · Tea + stevia',
        cals: '~270 kcal', change: 'Same as Monday modification. No butter, no sugar.',
        mMacros: { p: '12g', c: '35g', fiber: '3g' }
      },
      {
        time: 'Dinner 7:30-8:00 PM', name: 'Pea Mushroom Sabzi + Rice',
        detail: 'Green peas 70g · Mushroom 100g (up 20g) · Amul cream 15g (down 10g) · Rice 45g · Oil 7g',
        cals: '~340 kcal', change: 'Reduced cream (less saturated fat for cholesterol). More mushrooms (great for liver health).',
        mMacros: { p: '13g', c: '50g', fiber: '6g' }
      },
    ],
    macros: { cals: '1,590', p: '99g', c: '204g', f: '55g' }
  },
  {
    day: 'Thu', title: 'Thursday',
    meals: [
      {
        time: 'Breakfast 7:00-8:00 AM', name: 'PB Toast + Tea (modified)',
        detail: 'Wheat bread 2 slices 67g · Peanut butter 20g (+4g) · NO butter · Tea: milk 30ml + stevia',
        cals: '~330 kcal', change: 'Added 4g extra PB to compensate removing butter. Heart-healthy monounsaturated fats.',
        mMacros: { p: '13g', c: '38g', fiber: '3g' }
      },
      {
        time: 'Mid-Morning 10:30 AM', name: 'Apple + Almonds (NEW)',
        detail: 'Apple 150g · Almonds 10g (8-10 pieces)',
        cals: '~150 kcal', change: 'Almonds raise HDL (good cholesterol). Apple = soluble pectin fibre that lowers LDL.',
        mMacros: { p: '3g', c: '24g', fiber: '4g' }
      },
      {
        time: 'Lunch 1:00-1:30 PM', name: 'Egg Curry + Rice',
        detail: '2 whole eggs + 1 egg white (115g total) · Onion + tomato gravy 100g · Rice 55g · Oil 7g',
        cals: '~455 kcal', change: 'Added 1 egg white (+3.6g protein, only +17 kcal). More gravy vegetables for volume.',
        mMacros: { p: '26g', c: '58g', fiber: '4g' }
      },
      {
        time: 'Snack 4:30 PM', name: 'Corn Peanut Chaat + Tea',
        detail: 'Corn 80g · Peanuts 15g · Veggies 50g · Lemon · Tea + stevia',
        cals: '~200 kcal', change: 'Remove sugar from tea. Same great snack.',
        mMacros: { p: '7g', c: '28g', fiber: '4g' }
      },
      {
        time: 'Dinner 7:30-8:00 PM', name: 'Masoor Dal + Roti',
        detail: 'Masoor dal 70g dry (up 5g) · Atta 70g (2 rotis) · Ghee 7g tadka',
        cals: '~555 kcal', change: 'Reduced roti to 2. Masoor dal = highest protein dal + highest fibre. Best for cholesterol and blood sugar.',
        mMacros: { p: '30g', c: '78g', fiber: '11g' }
      },
    ],
    macros: { cals: '1,690', p: '112g', c: '216g', f: '54g' }
  },
  {
    day: 'Fri', title: 'Friday',
    meals: [
      {
        time: 'Breakfast 7:00-8:00 AM', name: 'Oats Bowl',
        detail: 'Oats 35g · Whey protein 20g · Toned milk 50ml · Mix seeds 12g · Cocoa 7g · Banana 50g · Pomegranate 60g',
        cals: '~410 kcal', change: 'Consistent Oats days keep glucose stable all morning. Good pre-workout nutrition.',
        mMacros: { p: '28g', c: '50g', fiber: '6g' }
      },
      {
        time: 'Mid-Morning 10:30 AM', name: 'Boiled Eggs x2 (NEW)',
        detail: '2 whole eggs boiled · Black pepper + salt',
        cals: '~155 kcal', change: 'Pre-workout protein. Friday is Pull day + HIIT is Saturday. Eggs fuel both sessions.',
        mMacros: { p: '14g', c: '1g', fiber: '0g' }
      },
      {
        time: 'Lunch 1:00-1:30 PM', name: 'Baingan Bharta + Roti',
        detail: 'Baingan/Eggplant 200g · Onion + tomato 80g · Atta 70g (2 rotis) · Oil 8g · Curd + onion raita 80g',
        cals: '~475 kcal', change: 'Reduced roti to 2. Kept raita - probiotics improve gut health and insulin sensitivity.',
        mMacros: { p: '18g', c: '68g', fiber: '9g' }
      },
      {
        time: 'Snack 4:30 PM', name: 'PB Toast + Tea (modified)',
        detail: 'Wheat bread 67g · PB 16g · NO butter · Tea + stevia',
        cals: '~270 kcal', change: 'Pre-HIIT prep carb - HIIT is Saturday. Keep carbs in this snack for fuel.',
        mMacros: { p: '12g', c: '35g', fiber: '3g' }
      },
      {
        time: 'Dinner 7:30-8:00 PM', name: 'Paneer Sabzi + Rice',
        detail: 'Paneer 60g · Sabzi veggies 100g · Rice 45g · Oil 7g',
        cals: '~415 kcal', change: 'Reduce rice. Increase veggies. Paneer preserved for recovery protein.',
        mMacros: { p: '22g', c: '58g', fiber: '4g' }
      },
    ],
    macros: { cals: '1,725', p: '113g', c: '218g', f: '58g' }
  },
  {
    day: 'Sat', title: 'Saturday',
    meals: [
      {
        time: 'Breakfast 7:00-8:00 AM', name: 'Besan Chilla + Tea (SWAP)',
        detail: 'Besan 70g · Onion + green chilli + coriander · Oil 5g · Tea: milk 30ml + stevia',
        cals: '~310 kcal', change: 'Swap from PB toast. High protein (14g), great for cholesterol. Good slow-carb fuel for HIIT.',
        mMacros: { p: '14g', c: '38g', fiber: '5g' }
      },
      {
        time: 'Mid-Morning 10:30 AM', name: 'Sprouts Chaat (NEW)',
        detail: 'Mixed sprouts 80g · Veggies 50g · Lemon + chaat masala',
        cals: '~155 kcal', change: 'HIIT day - slow-digesting carbs + protein. Prevents energy crash during workout.',
        mMacros: { p: '11g', c: '22g', fiber: '5g' }
      },
      {
        time: 'Lunch 1:00-1:30 PM', name: 'Rajma + Rice',
        detail: 'Rajma 55g dry · Rice 55g · Oil 7g · Salad 100g',
        cals: '~478 kcal', change: 'Post-HIIT meal. Slightly higher carb is fine after intense workout. Rajma protein for recovery.',
        mMacros: { p: '24g', c: '72g', fiber: '10g' }
      },
      {
        time: 'Snack 4:30 PM', name: 'Corn Peanut Chaat + Tea',
        detail: 'Corn 80g · Peanuts 15g · Veggies 50g · Tea + stevia',
        cals: '~200 kcal', change: 'Remove sugar. Good afternoon recovery snack.',
        mMacros: { p: '7g', c: '28g', fiber: '4g' }
      },
      {
        time: 'Dinner 7:30-8:00 PM', name: 'Arhar Dal + Roti',
        detail: 'Arhar dal 70g dry · Atta 70g (2 rotis) · Ghee 7g tadka',
        cals: '~495 kcal', change: 'Reduced roti to 2. Dal protein for HIIT recovery. Ghee in tadka fine at 7g.',
        mMacros: { p: '23g', c: '72g', fiber: '6g' }
      },
    ],
    macros: { cals: '1,638', p: '103g', c: '215g', f: '53g' }
  },
  {
    day: 'Sun', title: 'Sunday',
    meals: [
      {
        time: 'Breakfast 7:00-8:00 AM', name: 'Oats Bowl',
        detail: 'Oats 35g · Whey protein 20g · Toned milk 50ml · Mix seeds 12g · Cocoa 7g · Banana 50g · Pomegranate 60g',
        cals: '~410 kcal', change: 'Rest day - oats keeps you full till lunch with no spike. Consistent week start.',
        mMacros: { p: '28g', c: '50g', fiber: '6g' }
      },
      {
        time: 'Mid-Morning 10:30 AM', name: 'Roasted Makhana + Walnuts (NEW)',
        detail: 'Makhana 25g roasted · Walnuts 2 whole (10g)',
        cals: '~130 kcal', change: 'Walnuts = omega-3 fatty acids that directly reduce LDL cholesterol and support liver function.',
        mMacros: { p: '4g', c: '14g', fiber: '2g' }
      },
      {
        time: 'Lunch 1:00-1:30 PM', name: 'Chole + Roti',
        detail: 'Kabuli chana 55g · Atta 70g (2 rotis) · Oil 7g · Salad 100g',
        cals: '~540 kcal', change: 'Sunday relaxed day. 2 rotis feels satisfying. Chana = excellent protein + fibre.',
        mMacros: { p: '26g', c: '80g', fiber: '13g' }
      },
      {
        time: 'Snack 4:30 PM', name: 'PB Toast + Tea (modified)',
        detail: 'Wheat bread 67g · PB 16g · NO butter · Tea + stevia',
        cals: '~270 kcal', change: 'Consistent snack. Rest day so no extra carb loading needed.',
        mMacros: { p: '12g', c: '35g', fiber: '3g' }
      },
      {
        time: 'Dinner 7:30-8:00 PM', name: 'Pea Mushroom Sabzi + Rice',
        detail: 'Green peas 70g · Mushroom 100g · Cream 15g · Rice 45g · Oil 7g',
        cals: '~340 kcal', change: 'Light Sunday dinner. Mushrooms are great for liver health. Easy on digestion.',
        mMacros: { p: '13g', c: '50g', fiber: '6g' }
      },
    ],
    macros: { cals: '1,690', p: '105g', c: '217g', f: '54g' }
  },
];
