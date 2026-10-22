/*
  EDIT THIS FILE TO ADD OR UPDATE PROJECTS.
  - Duplicate a project object to add another project.
  - Add as many images as you need to the images array.
  - Put images inside assets/images/ and reference them with relative paths.
  - Use LaTeX in formulas, e.g. "\\[ H = \\hbar \\gamma_e \\mathbf{S}\\cdot\\mathbf{B} \\]".
  - Add links to papers, reports, repositories, videos, or external pages.
*/
window.PORTFOLIO = {
  contact: [
    { label: "Email", url: "mailto:your.email@example.com" },
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" }
  ],
  quantum: [
    {
      id: "intracellular-nanodiamond",
      title: "Intracellular Nanodiamond Sensing",
      date: "Sep 2026 — present",
      role: "Research project · DTU",
      summary: "Exploring quantum sensing with intracellular nanodiamonds, with an emphasis on NV-centre spin control, thermal-echo protocols, and T₁ relaxometry.",
      tags: ["NV centres", "T₁ relaxometry", "Thermal echo", "Biophysics"],
      cover: "assets/images/nanodiamond-cover.jpg",
      sections: [
        { heading: "Background", text: "Nitrogen-vacancy (NV) centres in diamond can act as nanoscale quantum sensors. When incorporated into nanodiamonds, they offer a route to probing local physical and chemical conditions in biological environments." },
        { heading: "Current work", bullets: [
          "Studying thermal-echo and T₁-based sensing protocols.",
          "Reviewing the effective ground-state spin Hamiltonian and its relation to magnetic-field and temperature sensing.",
          "Connecting pulse-sequence choices to experimental constraints and measurement sensitivity."
        ]},
        { heading: "Example equation", text: "A simplified interaction Hamiltonian between the NV electronic spin and a microwave magnetic field can be written as:" , formula: "\\[ H_{\\mathrm{int}} = \\hbar \\gamma_e \\mathbf{S}\\cdot\\mathbf{B}_1(t). \\]"},
        { heading: "Notes", text: "This page is a living research log. Add approved figures, pulse sequences, measurement plots, and further equations as the project progresses." }
      ],
      images: [],
      links: [
        { label: "DTU research environment", url: "https://www.healthtech.dtu.dk/" }
      ]
    },
    {
      id: "microwave-antenna",
      title: "Microwave Antenna Design for NV Control",
      date: "Sep 2026 — present",
      role: "Electromagnetics · Experimental design",
      summary: "Designing and simulating microwave antennas around the NV-centre transition near 2.87 GHz, with attention to field strength, spatial uniformity, and optical access.",
      tags: ["2.87 GHz", "COMSOL", "Microwave engineering", "Magnetic field"],
      cover: "assets/images/antenna-cover.jpg",
      sections: [
        { heading: "Objectives", bullets: [
          "Compare antenna geometries for magnetic-field amplitude and uniformity near the sample.",
          "Maintain optical access and compatibility with a biological sample holder.",
          "Translate spin-control requirements into practical RF hardware specifications."
        ]},
        { heading: "Spin-control relation", text: "The Rabi frequency is proportional to the microwave magnetic-field component perpendicular to the NV axis:" , formula: "\\[ \\Omega = \\gamma_e B_{1,\\perp}, \\qquad t_{\\pi}=\\frac{\\pi}{\\Omega}. \\]"},
        { heading: "Simulation and validation", text: "The project can include COMSOL field maps, geometry screenshots, mesh checks, antenna measurements, and comparisons between simulated and measured fields." }
      ],
      images: [],
      links: []
    },
    {
      id: "interferometry",
      title: "Optical Interferometry & Mechanical Resonators",
      date: "Jun 2026 — Aug 2026",
      role: "Summer research project · Niels Bohr Institute",
      summary: "Prepared and characterized SiN phononic-crystal membranes and improved a fiber-based interferometer lock using predictive integral-state management.",
      tags: ["Optomechanics", "Interferometry", "Red Pitaya", "Signal analysis"],
      cover: "assets/images/interferometry-cover.jpg",
      sections: [
        { heading: "Experimental platform", text: "A fiber-based Michelson interferometer was used to measure mechanical motion of high-Q silicon nitride resonators. The measurement setup combined a 1550 nm detection laser with 1310 nm optical actuation." },
        { heading: "Control improvement", bullets: [
          "Implemented predictive integral-state management on a Red Pitaya-based digital PI controller.",
          "Used linear trend estimation and fringe-based integral resetting to reduce integrator saturation.",
          "Analysed lock performance and mechanical spectra using Python and FFT-based methods."
        ]},
        { heading: "Reported results", text: "The project report recorded an increase in effective lock ratio from 83.96% to 99.97%, a reduction in out-of-threshold events of approximately 467×, and a 65% increase in maximum continuous lock duration." }
      ],
      images: [],
      links: [
        { label: "Project report / paper", url: "https://doi.org/10.13140/RG.2.2.31894.72002" }
      ]
    }
  ],
  electronics: [
    {
      id: "sporting-master",
      title: "Sporting Master — Embedded Electronics",
      date: "Feb 2026 — present",
      role: "Electronics Engineer · Nordic Clays",
      summary: "Contributed to the electronics and embedded control of a connected clay-target launcher, from prototype validation and power electronics to EMC mitigation and production documentation.",
      tags: ["STM32", "PCB design", "Power electronics", "EMC"],
      cover: "assets/images/sporting-master-cover.jpg",
      sections: [
        { heading: "System overview", text: "The system combines motor control, sensor monitoring, power management, wireless interfaces, and user controls. The electronics must operate reliably under high-current motor loads and demanding field conditions." },
        { heading: "Engineering contributions", bullets: [
          "Designed and debugged multilayer PCB assemblies and high-current power circuits.",
          "Integrated STM32-based control electronics, sensors, wireless modules, and RF receiver interfaces.",
          "Investigated electromagnetic interference and implemented board- and system-level mitigation.",
          "Prepared manufacturing documentation and supported production handover."
        ]},
        { heading: "Documentation", text: "Only include public, approved images and diagrams here. Avoid sharing proprietary schematics, unreleased layouts, supplier-sensitive information, or confidential test data." }
      ],
      images: [],
      links: [
        { label: "SportingMaster product", url: "https://nordicclays.eu/products/sportingmaster" }
      ]
    },
    {
      id: "embedded-prototyping",
      title: "Embedded Systems & Hardware Prototyping",
      date: "2023 — 2024",
      role: "Electronics Engineer · Shanghai Tanwen",
      summary: "Built and debugged electronic prototypes, integrated Arduino-based hardware and firmware, and helped establish an embedded-AI laboratory.",
      tags: ["C/C++", "Arduino", "Sensors", "Hardware integration"],
      cover: "assets/images/embedded-cover.jpg",
      sections: [
        { heading: "Work", bullets: [
          "Integrated hardware modules and validated circuit functionality.",
          "Developed Arduino-based embedded prototypes and performed functional testing.",
          "Helped establish a laboratory with 15 development platforms.",
          "Coordinated hardware/software integration work across a small team."
        ]},
        { heading: "Add project evidence", text: "Add photos of prototypes, block diagrams, public demo videos, firmware repositories, or test results. For each image, explain what it shows and what you personally contributed." }
      ],
      images: [],
      links: []
    }
  ]
};
