import { ProjectItem, SkillCategory, HighlightCard, EducationInfo, CertificationInfo } from '../types';

export const PERSONAL_INFO = {
  name: 'Bharath VT',
  role: 'B.Tech Artificial Intelligence & Data Science Student',
  status: 'Open to Opportunities',
  semesterStatus: '3rd Sem AI & DS',
  headline: "Hi, I'm Bharath VT",
  summary:
    'Building practical skills in programming, data, databases, IoT and emerging technologies. Focused on algorithmic clarity, structured system design, and hands-on implementation.',
  institution: 'REVA University',
  location: 'Bengaluru, Karnataka, India',
  currentSemester: '3rd Semester',
  phone: '7483349531',
  email: 'bharathbharath79082@gmail.com',
  displayEmail: 'bharath.vt@example.com',
  avatarUrl: '/bharath_profile.jpg',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    kaggle: 'https://kaggle.com',
  },
};

export const ABOUT_HIGHLIGHTS: HighlightCard[] = [
  {
    title: 'AI & Data Science',
    description: 'Analytical modeling, statistical reasoning, and automated decision flows.',
    iconName: 'ai',
    colorScheme: 'primary',
  },
  {
    title: 'Programming',
    description: 'Python scripts, C syntax, pointers, memory patterns, and algorithmic clarity.',
    iconName: 'programming',
    colorScheme: 'secondary',
  },
  {
    title: 'Databases',
    description: 'Relational schema design, MySQL queries, constraints, and ER structures.',
    iconName: 'database',
    colorScheme: 'dim',
  },
  {
    title: 'IoT',
    description: 'Microcontrollers, sensor integration, RFID, automation, and serial protocols.',
    iconName: 'iot',
    colorScheme: 'tertiary',
  },
  {
    title: 'Problem Solving',
    description: 'Step-by-step logic breakdown, systematic debugging, and project synthesis.',
    iconName: 'problem-solving',
    colorScheme: 'primary',
  },
];

export const EDUCATION_DATA: EducationInfo = {
  degree: 'B.Tech – Artificial Intelligence & Data Science',
  institution: 'REVA University, Bengaluru',
  location: 'Bengaluru, Karnataka, India',
  currentSemester: 'Current Semester: 3rd Semester',
  coursework: [
    'Python',
    'C Programming',
    'DBMS / MySQL',
    'Data Structures',
    'Discrete Mathematics',
    'Internet of Things (IoT)',
    'Object-Oriented Programming',
    'Software Development',
  ],
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages for system development, data scripting, and algorithms.',
    iconName: 'terminal',
    tags: ['Python', 'C'],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Relational architecture, querying pipelines, and entity schemas.',
    iconName: 'database',
    tags: ['DBMS', 'MySQL', 'SQL'],
  },
  {
    id: 'cs',
    title: 'Computer Science',
    description: 'Foundational computing concepts, discrete logic, and code structures.',
    iconName: 'computer-science',
    tags: ['Data Structures', 'Object-Oriented Programming', 'Discrete Mathematics'],
  },
  {
    id: 'iot',
    title: 'IoT & Hardware',
    description: 'Microcontrollers, embedded communication, and hardware sensors.',
    iconName: 'iot',
    tags: ['Arduino', 'NodeMCU', 'LDR', 'RFID', 'Sensors', 'Serial Communication'],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'Environments and platforms used for versioning and building.',
    iconName: 'tools',
    tags: ['VS Code', 'GitHub', 'LinkedIn'],
  },
  {
    id: 'core',
    title: 'Core Skills',
    description: 'Professional engineering practices and hands-on methodology.',
    iconName: 'core',
    tags: ['Problem Solving', 'Debugging', 'Project Development'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'smart-garage-rfid',
    title: 'Smart Garage Door Opener using RFID Tag',
    category: 'Automated Access System',
    badge: 'Featured IoT Project',
    description:
      'IoT-based automated access-control project using Arduino UNO, MFRC522 RFID reader, RFID tag and servo motor. Features secure contactless badge scanning with physical actuator control.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACyMx4yE6eXmBrbx6EVB8h7W-wGbbRdfbbvWG5g8-sIEtGvU-mUWp2aYZIHLal8mYWQrcOEqA_CHTSNt_aTx5ZJVt09UH77bKSO_4t4qOEj2_FDdFVmkMnaRGzFg1MDVOinyM4v-c-9hO2_c1oHwB2W6M8B0kEgZI4q_ChZmZa8f4A8SjP6k5OFm6e-M2L5lTv9-myo_YWzMwZUjG5Ive7pijHGDW2zQvfm-2AXt6ae5_0c6xdZ7DG',
    tags: ['Arduino UNO', 'MFRC522 RFID', 'Servo Motor', 'C/C++'],
    isFeatured: true,
    fullDetails: {
      overview:
        'A functional hardware and embedded software prototype for contactless vehicle or garage access. The system scans passive high-frequency RFID transponders, compares unique UIDs against an authorized database table, and triggers high-torque micro-servo motor rotation to lock/unlock access gates with audible/visual feedback.',
      keyComponents: [
        'Arduino UNO R3 with ATmega328P Microcontroller',
        'MFRC522 13.56 MHz RFID Reader with SPI Interface',
        'SG90 Precision Micro Servo Motor',
        'Dual Bi-Color Status Indicator LEDs & Piezo Buzzer',
      ],
      technicalHighlights: [
        'Hardware SPI interface configuration with software handshake',
        'UID parsing with byte-level security checks and timeout prevention',
        'State machine handling closed, opening, open-delay, and lock transitions',
      ],
      challengesSolved:
        'Eliminated false-trigger noise on the SPI bus through debouncing routines and maintained stable 5V rail regulation during servo inductive load spikes.',
    },
  },
  {
    id: 'algae-panels',
    title: 'Algae Panels – Startup / Venture Project',
    category: 'CleanTech Venture',
    badge: 'Concept',
    description:
      'Explored an eco-friendly algae-panel solution focused on air pollution and carbon reduction. The concept uses algae for air purification and carbon capture while producing useful biomass.',
    tags: ['Startup', 'Sustainability', 'Carbon Reduction'],
    fullDetails: {
      overview:
        'An ecological venture research initiative investigating modular micro-algae bioreactors mounted on building facades. The concept evaluates Chlorella vulgaris cultivation within translucent closed-loop fluid panels to bio-sequester CO2 from urban air while generating organic biomass for clean fertilizer and biofuel.',
      keyComponents: [
        'Photobioreactor Chamber Architecture',
        'Air intake fluid aeration with particulate filtration',
        'Nutrient regulation and harvest cycle telemetry',
      ],
      technicalHighlights: [
        'Comparative photosynthetic carbon absorption analysis',
        'Calculated carbon capture ratios per square meter of facade',
        'Business model and viability roadmap for commercial installations',
      ],
      challengesSolved:
        'Designed solar thermal dissipation channels to prevent solar overheating of algae cultures during peak daylight periods.',
    },
  },
  {
    id: 'smart-street-light',
    title: 'Smart Street Light – IoT Concept',
    category: 'Energy Automation',
    badge: 'IoT',
    description:
      'Automated lighting concept using NodeMCU/Arduino, LDR sensors, LEDs, analog readings and PWM. Dynamically scales illumination based on ambient light intensity to conserve grid energy.',
    tags: ['NodeMCU', 'LDR Sensor', 'PWM', 'Smart Energy'],
    fullDetails: {
      overview:
        'An intelligent energy management concept for urban streets. Using light-dependent resistor (LDR) analog inputs and Pulse Width Modulation (PWM), the system automatically ramps LED brightness in inverse proportion to natural daylight, conserving up to 45% of municipal lighting electricity.',
      keyComponents: [
        'NodeMCU ESP8266 Wi-Fi enabled controller',
        'LDR Light Dependent Resistor Voltage Divider',
        'High-Efficiency Solid-State LED Arrays',
        'PWM Dimming Driver Module',
      ],
      technicalHighlights: [
        'Smooth PWM curve calculation avoiding abrupt optical flickering',
        'Hysteresis thresholding to prevent oscillation during dusk and dawn',
        'Serial telemetry for real-time luminance and current draw logging',
      ],
      challengesSolved:
        'Overcame transient shadows from overcast clouds by implementing a 10-second moving average rolling filter on sensor values.',
    },
  },
  {
    id: 'c-dynamic-memory',
    title: 'C Programming & Dynamic Memory Practice',
    category: 'Systems Programming',
    badge: 'Low-Level',
    description:
      'Practice involving pointers, pointer arithmetic, arrays, functions, debugging and dynamic memory allocation using malloc(), calloc() and realloc() for optimized heap utilization.',
    tags: ['C', 'Pointers', 'Memory Allocation', 'Data Management'],
    fullDetails: {
      overview:
        'Comprehensive systems-level programming exercises written in ANSI C focusing on manual memory management, pointer arithmetic, heap allocation, and struct alignment. Built reusable dynamic array (vector) implementations and linked data structures with zero memory leaks.',
      keyComponents: [
        'Custom Dynamic Buffer and Re-sizable Vector Implementation',
        'Pointer arithmetic algorithms for multi-dimensional matrix operations',
        'Valgrind memory auditing and GDB step-by-step debugging workflows',
      ],
      technicalHighlights: [
        'Safe heap allocation wrappers verifying NULL return pointers',
        'Deterministic deallocation routines to guarantee no memory fragmentation',
        'Optimized struct byte padding and cache line locality considerations',
      ],
      challengesSolved:
        'Identified and resolved subtle dangling pointer edge cases during dynamic array reallocation when buffer addresses shifted.',
    },
  },
  {
    id: 'database-er-model',
    title: 'Database & ER Model Practice',
    category: 'Database Engineering',
    badge: 'SQL',
    description:
      'Database practice involving MySQL, SQL, entities, relationships, strong and weak entities, and ER-diagram design. Structured relational mapping and query execution exercises.',
    tags: ['MySQL', 'Relational Schemas', 'ER Modeling', 'SQL Queries'],
    fullDetails: {
      overview:
        'Relational database engineering and conceptual data modeling practice. Designed normalized 3NF schemas for university administration and e-commerce inventories, with strong and weak entity classifications, foreign key integrity constraints, and complex multi-table JOIN queries.',
      keyComponents: [
        'Entity-Relationship (ER) conceptual diagram specifications',
        'Normalized 3NF relational schema translation scripts (DDL)',
        'Complex SQL queries with aggregations, subqueries, and window functions',
      ],
      technicalHighlights: [
        'Cascade delete and update constraints maintaining referential integrity',
        'Index optimization on composite primary and foreign key columns',
        'View definitions and transactions ensuring ACID compliance',
      ],
      challengesSolved:
        'Structured resolving of many-to-many relationships through clean bridge junction tables with composite primary keys.',
    },
  },
];

export const CERTIFICATION_DATA: CertificationInfo = {
  title: 'Data Analysis with Python',
  courseCode: 'DA0101EN',
  provider: 'IBM Developer Skills Network / IBM SkillsBuild',
  issueDate: 'December 12, 2025',
  credentialId: 'IBM-SKILLS-DA0101EN-2025-VT',
  skillsCovered: [
    'Python Data Analysis',
    'Pandas DataFrames',
    'NumPy Operations',
    'Data Wrangling & Cleaning',
    'Exploratory Data Analysis (EDA)',
    'Model Development & Evaluation',
  ],
};
