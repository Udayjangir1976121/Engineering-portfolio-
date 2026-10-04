export const projects = [
  {
    id: 'battery-bms',
    index: '01',
    title: 'INTELLIGENT BMS',
    kicker: 'EMBEDDED + SIMULATION',
    short: 'Simulation-driven battery management system connecting battery behaviour, thermal modelling and STM32-based embedded control.',
    description:
      'A simulation-based Battery Management System designed around connecting physical battery behaviour with embedded firmware. The project explores battery behaviour over time, charging conditions, safety logic and user-configurable charging policies through an STM32-oriented control loop paired with OpenModelica battery and thermal models.',
    status: 'ONGOING',
    accent: 'green',
    chips: ['STM32', 'Embedded C', 'OpenModelica'],
    metrics: [
      ['MODEL', 'Battery + thermal'],
      ['CHARGE', 'CC → CV'],
      ['FIRMWARE', 'STM32'],
    ],
    architecture: [
      'Battery model',
      'Voltage / current / temperature',
      'STM32 firmware',
      'Charging & safety policy',
      'User notification / status',
    ],
    implementation:
      'The project is built as a simulation loop: the OpenModelica battery model provides electrical and thermal behaviour, while the STM32-oriented embedded controller interprets voltage, current and temperature data to decide how charging should proceed. The system includes constant-current and constant-voltage charging phases, temperature monitoring, safety limits and user-configurable charging behaviour such as overnight slow charging and charge-limit settings. Renode is used for embedded simulation alongside the physical plant model.',
    challenges: [
      'Making the battery and thermal behaviour realistic enough to expose meaningful control problems.',
      'Separating hard safety limits from user-selected charging preferences in the firmware logic.',
      'Keeping the embedded controller logic understandable while the simulated plant changes continuously.',
    ],
    learned: [
      'A BMS is fundamentally a feedback and state-management problem around a physical energy system.',
      'Simulation is most useful when the model boundaries, assumptions and controller interfaces are explicit.',
      'Telemetry, fault history and user notifications are part of the product, not just debugging extras.',
    ],
    result:
      'The current build is focused on connecting OpenModelica battery behaviour with STM32-oriented control logic, protection states and user-facing charging policies. The project is still in active development.',
    technologies: ['STM32', 'STM32CubeIDE', 'Embedded C', 'OpenModelica', 'Renode', 'State machines'],
    links: [
      { label: 'GitHub', url: '[ADD GITHUB]' },
    ],
    media: [
      { type: 'image', label: 'OpenModelica Environment', url: '/(bms)om_env.png' },
      { type: 'image', label: 'Simulation Graph', url: '/(bms)om_graph.png' },
      { type: 'image', label: '[ADD TEMPERATURE GRAPH]' },
      { type: 'image', label: '[ADD ARCHITECTURE DIAGRAM]' },
      { type: 'image', label: '[ADD RENODE SCREENSHOT]' },
    ],
  },
  {
    id: 'holo-battalion',
    index: '02',
    title: 'HOLO BATTALION',
    kicker: 'ROBOTICS + ROS2',
    short: 'ROS2-based holonomic robot system combining motion control, inverse kinematics and vision-based interaction.',
    description:
      'A robotics system built around a three-wheel omni-directional drive, PID control, inverse kinematics and ArUco-based vision for the e-Yantra Holo Battalion work. The project explores how desired robot motion gets converted into individual wheel velocities and then controlled using feedback.',
    status: 'COMPETITION WORK',
    accent: 'blue',
    chips: ['ROS2', 'PID', 'ArUco'],
    metrics: [
      ['DRIVE', '3 omni wheels'],
      ['GEOMETRY', '~185 mm radius'],
      ['VISION', 'ArUco markers'],
    ],
    architecture: [
      'Perception / ArUco',
      'Desired robot motion',
      'PID controller',
      'Inverse kinematics',
      'Wheel velocities → holonomic robot',
    ],
    implementation:
      'The work combines ROS2 nodes, Gazebo simulation, Python control logic, inverse kinematics and closed-loop motion. Three omni wheels arranged approximately 120° apart (robot radius ~185 mm, wheel radius ~0.038 m, base-to-wheel distance ~0.155 m) provide holonomic motion. ArUco markers are used as structured visual references while the PID controller converts desired chassis motion into individual wheel commands through inverse kinematics.',
    challenges: [
      'Keeping coordinate frames, wheel geometry and motion directions consistent across the system.',
      'Tuning PID behaviour without masking model or odometry errors.',
      'Making perception, manipulation and navigation logic cooperate instead of debugging each subsystem in isolation.',
    ],
    learned: [
      'Holonomic motion is easiest to understand by starting from chassis velocity and deriving each wheel command.',
      'A mathematically correct controller can still fail when coordinate conventions are wrong.',
      'Simulation becomes valuable when every signal can be inspected in RViz and ROS2 tools.',
    ],
    result:
      'Implemented the core holonomic-control and perception workflow used for the Holo Battalion robotics work, with Gazebo simulation and ROS2 debugging as part of the development process.',
    technologies: ['ROS2 Humble', 'Gazebo', 'Python', 'PID', 'ArUco', 'RViz2', 'Inverse kinematics'],
    cover: '/(title)Holo Battalion Robot Arena.png',
    links: [
      { label: 'GitHub', url: '[ADD GITHUB]' },
    ],
    media: [
      { type: 'video', label: 'Gazebo Simulation', url: '/(holo)gazebo square - side view.mp4' },
      { type: 'image', label: 'RQT Graph', url: '/rqt-graph(holo).jpg' },
      { type: 'video', label: 'Top View with Terminals', url: '/(holo) top view with terminals Trim.mp4' },
      { type: 'image', label: '[ADD ARENA / ARUCO PHOTOS]' },
    ],
  },
  {
    id: 'mapping-robot',
    index: '03',
    title: 'MAPPING ROBOT',
    kicker: 'MOBILE ROBOTICS',
    short: 'Low-cost robotic mapping platform exploring camera and distance sensing with ROS2-based spatial visualization.',
    description:
      'An experimental mobile robotics platform exploring how low-cost sensors can be combined to perceive an environment and produce a spatial representation visualized in ROS2/RViz. The project uses Raspberry Pi-class hardware, ESP32-CAM, VL53L1X time-of-flight distance sensors and OpenCV.',
    status: 'ONGOING',
    accent: 'cyan',
    chips: ['ROS2', 'VL53L1X', 'ESP32-CAM'],
    metrics: [
      ['FOCUS', 'Low-cost sensing'],
      ['MIDDLEWARE', 'ROS2'],
      ['VIEW', 'RViz2'],
    ],
    architecture: [
      'Camera + distance sensors',
      'Sensor processing',
      'Perception',
      'Spatial information → ROS2',
      'RViz visualization',
    ],
    implementation:
      'The planned system uses inexpensive distance sensing (VL53L1X time-of-flight) and camera-capable embedded hardware (ESP32-CAM) to publish perception data into ROS2, where it can be inspected and turned into a spatial representation. OpenCV handles image processing while RViz provides the visualization layer.',
    challenges: [
      'Getting useful geometry from inexpensive and noisy sensors.',
      'Understanding how sensor placement affects the map, not just the sensor reading.',
      'Building the system so every stage remains visible while the robot is moving.',
    ],
    learned: [
      'A mapping robot is really a chain of coordinate systems, time alignment and imperfect measurements.',
      'Cheap sensors become much more useful when the software makes their uncertainty visible.',
      'RViz is not just for presentation; it is a debugging instrument.',
    ],
    result:
      'Ongoing experimental platform for understanding low-cost robotic perception and mapping. The project is being shaped into a demonstrable platform with ROS2 and RViz at the centre of the visualization workflow.',
    technologies: ['ROS2', 'RViz2', 'ESP32-CAM', 'VL53L1X', 'OpenCV', 'Raspberry Pi', 'Python'],
    links: [
      { label: 'GitHub', url: '[ADD GITHUB]' },
    ],
    media: [
      { type: 'image', label: '[ADD ROBOT PHOTOS]' },
      { type: 'image', label: '[ADD SENSOR PHOTOS]' },
      { type: 'image', label: '[ADD RVIZ MAP]' },
      { type: 'video', label: '[ADD VIDEO]' },
    ],
  },
  {
    id: 'robotic-arm',
    index: '04',
    title: '4-DOF ROBOTIC ARM',
    kicker: 'EMBEDDED ROBOTICS',
    short: 'Four-degree-of-freedom robotic arm built around servo actuation and embedded control.',
    description:
      'A physical robotic arm project focused on learning how embedded control becomes real mechanical motion through servo actuation, PWM generation and user input. The project involved building and controlling a four-degree-of-freedom arm using servo motors and a microcontroller, including experimentation with wireless and web-based control.',
    status: 'BUILT',
    accent: 'orange',
    chips: ['Servo', 'PWM', 'Embedded'],
    metrics: [
      ['DOF', '4'],
      ['ACTUATION', 'Servo motors'],
      ['CONTROL', 'Microcontroller'],
    ],
    architecture: [
      'User input',
      'Microcontroller',
      'PWM generation',
      'Servo motors',
      'Robotic arm movement',
    ],
    implementation:
      'The controller maps user commands into servo positions and PWM signals, turning abstract targets into coordinated physical movement across the arm joints. The project involved working with a physical robotic mechanism — controlling multiple actuators, handling user input and experimenting with wireless and web-based control approaches.',
    challenges: [
      'Mapping user input into useful joint motion instead of isolated motor movement.',
      'Dealing with mechanical limits and the mismatch between ideal angles and real motion.',
      'Learning where software ends and mechanical behaviour starts affecting the result.',
    ],
    learned: [
      'PWM is simple mathematically but becomes much more intuitive when it directly moves hardware.',
      'Robotic mechanisms expose assumptions that are invisible in code-only projects.',
      'Control should be designed around the behaviour of the whole mechanism, not only the actuator.',
    ],
    result:
      'Built a working 4-DOF robotic arm and used it as a practical platform for learning embedded control, servo actuation and physical robotics.',
    technologies: ['Embedded C', 'PWM', 'Servo motors', 'Microcontroller', 'Robotics'],
    cover: '/(title)DIY Robotic Arm Workbench Setup.png',
    links: [
      { label: 'GitHub', url: '[ADD GITHUB]' },
    ],
    media: [
      { type: 'image', label: 'Robotic Arm System', url: '/arm_photo.jpg' },
      { type: 'video', label: 'Initial Integration Test', url: '/Initial_test _arm.mp4' },
      { type: 'video', label: 'Arm Movement Execution', url: '/arm_movement.mp4' },
    ],
  },
  {
    id: 'battlebot',
    index: '05',
    title: '15 KG BATTLEBOT',
    kicker: 'SYSTEM INTEGRATION',
    short: '~15 kg physical combat robot combining mechanical construction, motor control, power electronics and embedded systems.',
    description:
      'A roughly 15 kg combat robot build that required integrating motors, motor drivers, battery and power systems, radio/control electronics, mechanical structure, a physical drivetrain and embedded electronics into one working machine. The central engineering challenge was system integration — making every subsystem work together under real physical constraints.',
    status: 'BUILT',
    accent: 'yellow',
    chips: ['Motor Control', 'Power', 'Integration'],
    metrics: [
      ['MASS', '~15 kg'],
      ['SYSTEM', 'Electromechanical'],
      ['MODE', 'Remote control'],
    ],
    architecture: [
      'Radio controller',
      'Receiver / control electronics',
      'Motor drivers',
      'Motors',
      'Mechanical drivetrain',
    ],
    implementation:
      'The build brought together control electronics, motor drive, power system and mechanical chassis into a robot intended to survive real physical interaction. The project required dealing with real motors, power requirements, mechanical constraints, electronics packaging, motor control, hardware debugging and physical testing.',
    challenges: [
      'Designing electronics around real current, vibration and mechanical constraints.',
      'Keeping the power system and motor control dependable under demanding loads.',
      'Testing a complete machine where mechanical failures can hide electrical or control problems.',
    ],
    learned: [
      'A real robot is a systems-engineering problem: every subsystem affects the others.',
      'Power integrity and mechanical reliability can matter as much as the controller.',
      'Physical testing reveals failure modes that simulation simply cannot predict completely.',
    ],
    result:
      'Built and worked with a physical ~15 kg battlebot, gaining hands-on experience across robotics, power electronics, motor control and mechanical integration.',
    technologies: ['Motor drivers', 'Power electronics', 'Radio control', 'Mechanical integration', 'Embedded electronics'],
    cover: '/battelbot(bot1).jpg',
    links: [
      { label: 'GitHub / Video', url: '[ADD GITHUB / VIDEO]' },
    ],
    media: [
      { type: 'image', label: '[ADD BATTLEBOT PHOTOS]' },
      { type: 'video', label: '[ADD BATTLEBOT VIDEO]' },
    ],
  },
  {
    id: 'esp32-lab',
    index: '06',
    title: 'ESP32 LAB',
    kicker: 'EMBEDDED EXPERIMENTS',
    short: 'Hands-on ESP32 and ESP-IDF experiments covering firmware development, peripherals, serial debugging and low-power operation.',
    description:
      'A collection of embedded experiments rather than a single finished product. The work covers ESP32 and ESP32-CAM development using ESP-IDF, including firmware building and flashing, FTDI programming, serial communication, GPIO, ADC, Wi-Fi, Bluetooth/BLE concepts, deep sleep, microcontroller peripherals and serial debugging. The project represents learning the actual ESP-IDF development workflow from the hardware level up.',
    status: 'ONGOING',
    accent: 'violet',
    chips: ['ESP32', 'ESP-IDF', 'Embedded C'],
    metrics: [
      ['SDK', 'ESP-IDF'],
      ['I/O', 'GPIO + ADC'],
      ['POWER', 'Deep sleep'],
    ],
    architecture: [
      'Firmware (ESP-IDF)',
      'MCU peripherals',
      'Sensors / camera / comms',
      'Processing / output',
    ],
    implementation:
      'The experiments were used to understand the microcontroller below the abstraction layer: building and flashing firmware with ESP-IDF, identifying hardware via FTDI, working through serial output, exploring GPIO, ADC, UART, Wi-Fi and BLE peripherals, and learning how the ESP32 behaves in different power states including deep sleep. This is development work and hardware exploration, not a single product.',
    challenges: [
      'Getting comfortable with toolchains, device flashing and serial debugging.',
      'Understanding pins and peripherals as hardware resources rather than just API names.',
      'Connecting low-level configuration decisions to system-level behaviour.',
    ],
    learned: [
      'The fastest way to learn an MCU is to observe what the hardware is actually doing.',
      'Toolchains and debugging workflows are core embedded skills, not setup chores.',
      'Peripherals make more sense when learned from the signal path first and the API second.',
    ],
    result:
      'Built a practical base of ESP32 embedded knowledge through ESP-IDF, ESP32-CAM and peripheral experiments that now feeds into larger robotics and sensing projects.',
    technologies: ['ESP32', 'ESP32-CAM', 'ESP-IDF', 'Embedded C', 'FTDI', 'UART', 'GPIO', 'ADC', 'Wi-Fi', 'BLE', 'Deep sleep'],
    cover: '/(emb1)title_rotated.jpg',
    coverFit: 'contain',
    links: [
      { label: 'GitHub', url: '[ADD GITHUB]' },
    ],
    media: [
      { type: 'image', label: 'Tilt-Controlled Pixel Space Shooter Setup', url: '/(emb1)Tilt-Controlled Pixel Space Shooter Setup.png' },
      { type: 'image', label: 'ESP32-CAM Web Interface', url: '/(emb1)esp32cam_web_interface.png' },
    ],
  },
];
