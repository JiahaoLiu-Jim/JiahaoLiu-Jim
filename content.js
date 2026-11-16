window.SITE_DATA = {
  "version": 1,
  "revision": 1794829088625,
  "auth": {
    "username": "admin",
    "salt": "jiahao-portfolio-v1",
    "hash": "60c28b3712b8d90769ac24e439b40c42f7f41a6959d730fce3e5ca14db8248ce"
  },
  "profile": {
    "name": "Jiahao Liu",
    "headline": "Quantum sensing.\nElectronics.\nEveryday curiosity.",
    "intro": "I build and investigate systems at the intersection of quantum sensing, electronics, and experimental physics.",
    "bio": "MSc student in Quantum Information Science at the University of Copenhagen and the Technical University of Denmark. A collection of projects, ideas, and life beyond the lab.",
    "email": "",
    "github": "",
    "linkedin": ""
  },
  "categories": [
    {
      "id": "quantum",
      "name": "Quantum research",
      "description": "Quantum sensors, spin dynamics, microwave fields, optics, and experimental control."
    },
    {
      "id": "electronics",
      "name": "Electronics research",
      "description": "Embedded systems, PCB design, power electronics, and engineering problem-solving."
    },
    {
      "id": "about",
      "name": "About me",
      "description": "Curiosity does not stop when the instruments are switched off. Cooking, biking, and time in nature."
    }
  ],
  "posts": [
    {
      "id": "intracellular-nanodiamond",
      "category": "quantum",
      "title": "Intracellular Nanodiamond Sensing",
      "summary": "Exploring quantum sensing with intracellular nanodiamonds, with an emphasis on NV-centre spin control, thermal-echo protocols, and T₁ relaxometry.",
      "date": "Sep 2026 — present",
      "role": "Research project · DTU",
      "tags": "NV centres, T₁ relaxometry, Thermal echo, Biophysics",
      "body": "<h2>Background</h2><p>Nitrogen-vacancy (NV) centres in diamond can act as nanoscale quantum sensors. When incorporated into nanodiamonds, they offer a route to probing local physical and chemical conditions in biological environments.</p><h2>Current work</h2><ul><li>Studying thermal-echo and T₁-based sensing protocols.</li><li>Reviewing the effective ground-state spin Hamiltonian and its relation to magnetic-field and temperature sensing.</li><li>Connecting pulse-sequence choices to experimental constraints and measurement sensitivity.</li></ul><h2>Example equation</h2><p>A simplified interaction Hamiltonian between the NV electronic spin and a microwave magnetic field can be written as:</p><p>\\[ H_{\\mathrm{int}} = \\hbar \\gamma_e \\mathbf{S}\\cdot\\mathbf{B}_1(t). \\]</p><h2>Notes</h2><p>This page is a living research log. Add approved figures, pulse sequences, measurement plots, and further equations as the project progresses.</p><p><a href=\"https://www.healthtech.dtu.dk/\">DTU research environment ↗</a></p>",
      "photos": [],
      "cover": ""
    },
    {
      "id": "microwave-antenna",
      "category": "quantum",
      "title": "Microwave Antenna Design for NV Control",
      "summary": "Designing and simulating microwave antennas around the NV-centre transition near 2.87 GHz, with attention to field strength, spatial uniformity, and optical access.",
      "date": "Sep 2026 — present",
      "role": "Electromagnetics · Experimental design",
      "tags": "2.87 GHz, COMSOL, Microwave engineering, Magnetic field",
      "body": "<h2>Objectives</h2><ul><li>Compare antenna geometries for magnetic-field amplitude and uniformity near the sample.</li><li>Maintain optical access and compatibility with a biological sample holder.</li><li>Translate spin-control requirements into practical RF hardware specifications.</li></ul><h2>Spin-control relation</h2><p>The Rabi frequency is proportional to the microwave magnetic-field component perpendicular to the NV axis:</p><p>\\[ \\Omega = \\gamma_e B_{1,\\perp}, \\qquad t_{\\pi}=\\frac{\\pi}{\\Omega}. \\]</p><h2>Simulation and validation</h2><p>The project can include COMSOL field maps, geometry screenshots, mesh checks, antenna measurements, and comparisons between simulated and measured fields.</p>",
      "photos": [],
      "cover": ""
    },
    {
      "id": "interferometry",
      "category": "quantum",
      "title": "Optical Interferometry & Mechanical Resonators",
      "summary": "Prepared and characterized SiN phononic-crystal membranes and improved a fiber-based interferometer lock using predictive integral-state management.",
      "date": "Jun 2026 — Aug 2026",
      "role": "Summer research project · Niels Bohr Institute",
      "tags": "Optomechanics, Interferometry, Red Pitaya, Signal analysis",
      "body": "<h2>Experimental platform</h2><p>A fiber-based Michelson interferometer was used to measure mechanical motion of high-Q silicon nitride resonators. The measurement setup combined a 1550 nm detection laser with 1310 nm optical actuation.</p><h2>Control improvement</h2><ul><li>Implemented predictive integral-state management on a Red Pitaya-based digital PI controller.</li><li>Used linear trend estimation and fringe-based integral resetting to reduce integrator saturation.</li><li>Analysed lock performance and mechanical spectra using Python and FFT-based methods.</li></ul><h2>Reported results</h2><p>The project report recorded an increase in effective lock ratio from 83.96% to 99.97%, a reduction in out-of-threshold events of approximately 467×, and a 65% increase in maximum continuous lock duration.</p><p><a href=\"https://doi.org/10.13140/RG.2.2.31894.72002\">Project report / paper ↗</a></p>",
      "photos": [],
      "cover": ""
    },
    {
      "id": "sporting-master",
      "category": "electronics",
      "title": "Sporting Master — Embedded Electronics",
      "summary": "Contributed to the electronics and embedded control of a connected clay-target launcher, from prototype validation and power electronics to EMC mitigation and production documentation.",
      "date": "Feb 2026 — present",
      "role": "Electronics Engineer · Nordic Clays",
      "tags": "STM32, PCB design, Power electronics, EMC",
      "body": "<h2>System overview</h2><p>The system combines motor control, sensor monitoring, power management, wireless interfaces, and user controls. The electronics must operate reliably under high-current motor loads and demanding field conditions.</p><h2>Engineering contributions</h2><ul><li>Designed and debugged multilayer PCB assemblies and high-current power circuits.</li><li>Integrated STM32-based control electronics, sensors, wireless modules, and RF receiver interfaces.</li><li>Investigated electromagnetic interference and implemented board- and system-level mitigation.</li><li>Prepared manufacturing documentation and supported production handover.</li></ul><h2>Documentation</h2><p>Only include public, approved images and diagrams here. Avoid sharing proprietary schematics, unreleased layouts, supplier-sensitive information, or confidential test data.</p><p><a href=\"https://nordicclays.eu/products/sportingmaster\">SportingMaster product ↗</a></p>",
      "photos": [],
      "cover": ""
    },
    {
      "id": "embedded-prototyping",
      "category": "electronics",
      "title": "Embedded Systems & Hardware Prototyping",
      "summary": "Built and debugged electronic prototypes, integrated Arduino-based hardware and firmware, and helped establish an embedded-AI laboratory.",
      "date": "2023 — 2024",
      "role": "Electronics Engineer · Shanghai Tanwen",
      "tags": "C/C++, Arduino, Sensors, Hardware integration",
      "body": "<h2>Work</h2><ul><li>Integrated hardware modules and validated circuit functionality.</li><li>Developed Arduino-based embedded prototypes and performed functional testing.</li><li>Helped establish a laboratory with 15 development platforms.</li><li>Coordinated hardware/software integration work across a small team.</li></ul><h2>Add project evidence</h2><p>Add photos of prototypes, block diagrams, public demo videos, firmware repositories, or test results. For each image, explain what it shows and what you personally contributed.</p>",
      "photos": [],
      "cover": ""
    },
    {
      "id": "cooking",
      "category": "about",
      "title": "Cooking",
      "summary": "Experimenting with recipes, ingredients, and techniques. Make a hypothesis, try it, taste, and adjust.",
      "date": "",
      "role": "Beyond the lab",
      "tags": "",
      "body": "<p>Experimenting with recipes, ingredients, and techniques. Make a hypothesis, try it, taste, and adjust.</p>",
      "photos": [
        {
          "id": "88ccc83d-f5ab-473a-92e9-9baaafcc2778",
          "src": "assets/88ccc83d-f5ab-473a-92e9-9baaafcc2778.jpg",
          "caption": ""
        },
        {
          "id": "2c1aaa3f-a8aa-49b1-b6ff-92cabeaeca96",
          "src": "assets/2c1aaa3f-a8aa-49b1-b6ff-92cabeaeca96.jpg",
          "caption": ""
        },
        {
          "id": "dd3390c5-1842-4491-b394-635b84c361aa",
          "src": "assets/dd3390c5-1842-4491-b394-635b84c361aa.jpg",
          "caption": ""
        },
        {
          "id": "6974b16b-56b1-4562-b787-465a5c770759",
          "src": "assets/6974b16b-56b1-4562-b787-465a5c770759.jpg",
          "caption": ""
        },
        {
          "id": "ed515d93-2033-47c7-9c6b-4088e418e558",
          "src": "assets/ed515d93-2033-47c7-9c6b-4088e418e558.jpg",
          "caption": ""
        },
        {
          "id": "76564bbd-f5c1-4a17-aa81-7f2acb49586a",
          "src": "assets/76564bbd-f5c1-4a17-aa81-7f2acb49586a.jpg",
          "caption": ""
        }
      ],
      "cover": "88ccc83d-f5ab-473a-92e9-9baaafcc2778"
    },
    {
      "id": "biking",
      "category": "about",
      "title": "Biking",
      "summary": "Exploring places by bicycle and enjoying the slower details of a route.",
      "date": "",
      "role": "Beyond the lab",
      "tags": "",
      "body": "<p>Exploring places by bicycle and enjoying the slower details of a route.</p>",
      "photos": [],
      "cover": ""
    },
    {
      "id": "nature",
      "category": "about",
      "title": "Nature & environment",
      "summary": "Spending time outdoors and paying attention to the natural world.",
      "date": "",
      "role": "Beyond the lab",
      "tags": "",
      "body": "<p>Spending time outdoors and paying attention to the natural world.</p>",
      "photos": [],
      "cover": ""
    }
  ]
};
