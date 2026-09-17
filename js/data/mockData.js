// Sushruta Mock Tests Dataset - Complete NEET High-Yield Question Bank
export const MOCK_TESTS_DATA = {
  fullTests: [
    {
      id: "mock-1",
      title: "Mock Test 1",
      subtitle: "Full Syllabus (NEET Pattern)",
      iconColor: "#10b981",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      durationMinutes: 200,
      totalQuestions: 200,
      maxScore: 720,
      difficulty: "Moderate",
      difficultyColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description: "Comprehensive all-India level test covering Class 11 and Class 12 NEET syllabus strictly aligned with recent NTA trend.",
      tags: ["Full Syllabus", "NTA Pattern", "AI Predicted"],
      sections: [
        {
          id: "phy",
          name: "Physics",
          questions: [
            {
              id: "m1-p1",
              num: 1,
              subject: "Physics",
              chapter: "Current Electricity",
              difficulty: "Medium",
              text: "A potentiometer wire of length 100 cm has a resistance of 10 \\Omega. It is connected in series with a resistance R and a cell of emf 2 V and negligible internal resistance. A source of emf 10 mV is balanced against a length of 40 cm of the wire. What is the value of external resistance R?",
              options: [
                "790 \\Omega",
                "490 \\Omega",
                "390 \\Omega",
                "190 \\Omega"
              ],
              correctAnswer: 0,
              explanation: "Potential gradient k = E' / l' = 10 mV / 0.4 m = 0.025 V/m.\nPotential across 1m wire V = 0.025 V.\nCurrent I = V / R_wire = 0.025 / 10 = 2.5 mA.\nTotal circuit resistance R_tot = E / I = 2 / 0.0025 = 800 \\Omega.\nR = 800 - 10 = 790 \\Omega.",
              ncertReference: "NCERT Class 12 Physics, Chapter 3: Current Electricity, Page 122"
            },
            {
              id: "m1-p2",
              num: 2,
              subject: "Physics",
              chapter: "Ray Optics",
              difficulty: "Medium",
              text: "A biconvex lens has a focal length equal to 2/3 times the radius of curvature of either surface. The refractive index of the material of the lens is:",
              options: [
                "1.50",
                "1.75",
                "1.33",
                "1.67"
              ],
              correctAnswer: 1,
              explanation: "Using Lens Maker's Formula: 1/f = (\\mu - 1)(1/R1 - 1/R2).\nHere f = 2/3 R, R1 = +R, R2 = -R.\n3/(2R) = (\\mu - 1)(2/R) => \\mu - 1 = 3/4 = 0.75 => \\mu = 1.75.",
              ncertReference: "NCERT Class 12 Physics, Chapter 9: Ray Optics, Page 326"
            },
            {
              id: "m1-p3",
              num: 3,
              subject: "Physics",
              chapter: "Dual Nature of Radiation and Matter",
              difficulty: "Hard",
              text: "When light of wavelength \\lambda is incident on an emitter, the stopping potential is 3V_0. When light of wavelength 2\\lambda is incident on the same emitter, the stopping potential is V_0. The threshold wavelength for the photoelectric surface is:",
              options: [
                "4\\lambda",
                "3\\lambda",
                "6\\lambda",
                "5\\lambda"
              ],
              correctAnswer: 0,
              explanation: "e(3V_0) = hc/\\lambda - W_0 and e(V_0) = hc/(2\\lambda) - W_0.\nMultiply eq(2) by 3: 3eV_0 = 3hc/(2\\lambda) - 3W_0.\nEquating: hc/\\lambda - W_0 = 3hc/(2\\lambda) - 3W_0 => 2W_0 = hc/(2\\lambda) => W_0 = hc/(4\\lambda).\nThus \\lambda_0 = 4\\lambda.",
              ncertReference: "NCERT Class 12 Physics, Chapter 11: Dual Nature, Page 394"
            }
          ]
        },
        {
          id: "chem",
          name: "Chemistry",
          questions: [
            {
              id: "m1-c1",
              num: 4,
              subject: "Chemistry",
              chapter: "Chemical Bonding",
              difficulty: "Easy",
              text: "Which of the following species has the highest bond order according to Molecular Orbital Theory?",
              options: [
                "O_2^+ (15 electrons)",
                "O_2 (16 electrons)",
                "O_2^- (17 electrons)",
                "O_2^{2-} (18 electrons)"
              ],
              correctAnswer: 0,
              explanation: "Bond orders:\nO_2^+ = (10-5)/2 = 2.5\nO_2 = (10-6)/2 = 2.0\nO_2^- = (10-7)/2 = 1.5\nO_2^{2-} = (10-8)/2 = 1.0\nHighest is O_2^+ with 2.5.",
              ncertReference: "NCERT Class 11 Chemistry, Chapter 4: Chemical Bonding, Page 128"
            },
            {
              id: "m1-c2",
              num: 5,
              subject: "Chemistry",
              chapter: "Aldehydes, Ketones & Carboxylic Acids",
              difficulty: "Medium",
              text: "Benzaldehyde on heating with concentrated NaOH solution undergoes disproportionation to give sodium benzoate and benzyl alcohol. This reaction is known as:",
              options: [
                "Cannizzaro Reaction",
                "Aldol Condensation",
                "Clemmensen Reduction",
                "Rosenmund Reaction"
              ],
              correctAnswer: 0,
              explanation: "Aldehydes without alpha-hydrogen undergo self-oxidation and reduction (disproportionation) in concentrated alkali. This is the Cannizzaro Reaction.",
              ncertReference: "NCERT Class 12 Chemistry, Chapter 12: Aldehydes & Ketones, Page 370"
            }
          ]
        },
        {
          id: "bot",
          name: "Botany",
          questions: [
            {
              id: "m1-b1",
              num: 6,
              subject: "Botany",
              chapter: "Photosynthesis in Higher Plants",
              difficulty: "Medium",
              text: "Which of the following statements about C4 plants is INCORRECT?",
              options: [
                "RuBisCO is predominantly present in mesophyll cells",
                "They possess Kranz anatomy in their leaves",
                "Primary CO2 acceptor is Phosphoenolpyruvate (PEP)",
                "They minimize photorespiratory loss and have high water-use efficiency"
              ],
              correctAnswer: 0,
              explanation: "In C4 plants, mesophyll cells contain PEP carboxylase but lack RuBisCO. RuBisCO is concentrated strictly in bundle sheath cells.",
              ncertReference: "NCERT Class 11 Biology, Chapter 13: Photosynthesis, Page 218"
            },
            {
              id: "m1-b2",
              num: 7,
              subject: "Botany",
              chapter: "Molecular Basis of Inheritance",
              difficulty: "Easy",
              text: "During transcription in prokaryotes, which subunit of RNA polymerase is responsible for promoter recognition and initiation?",
              options: [
                "\\sigma (sigma) factor",
                "\\rho (rho) factor",
                "\\beta subunit",
                "\\alpha subunit"
              ],
              correctAnswer: 0,
              explanation: "The sigma factor initiates transcription by binding to the promoter region. The rho factor is involved in transcription termination.",
              ncertReference: "NCERT Class 12 Biology, Chapter 6: Molecular Basis of Inheritance, Page 109"
            }
          ]
        },
        {
          id: "zoo",
          name: "Zoology",
          questions: [
            {
              id: "m1-z1",
              num: 8,
              subject: "Zoology",
              chapter: "Chemical Coordination and Integration",
              difficulty: "Medium",
              text: "A glucocorticoid hormone responsible for stimulating gluconeogenesis, lipolysis, and proteolysis while inhibiting cellular amino acid uptake is:",
              options: [
                "Cortisol",
                "Insulin",
                "Aldosterone",
                "Thyroxine"
              ],
              correctAnswer: 0,
              explanation: "Cortisol stimulates gluconeogenesis, lipolysis, proteolysis, and inhibits cellular uptake and utilization of amino acids.",
              ncertReference: "NCERT Class 11 Biology, Chapter 22: Chemical Coordination, Page 337"
            },
            {
              id: "m1-z2",
              num: 9,
              subject: "Zoology",
              chapter: "Human Health and Disease",
              difficulty: "Easy",
              text: "Which antibody class is predominantly present in colostrum secreted during initial days of lactation, providing natural passive immunity?",
              options: [
                "IgA",
                "IgG",
                "IgM",
                "IgE"
              ],
              correctAnswer: 0,
              explanation: "Colostrum is rich in IgA antibodies which provide essential passive immunity to protect the newborn from respiratory and intestinal infections.",
              ncertReference: "NCERT Class 12 Biology, Chapter 8: Human Health and Disease, Page 152"
            }
          ]
        }
      ]
    },
    {
      id: "mock-2",
      title: "Mock Test 2",
      subtitle: "Full Syllabus (NEET Pattern)",
      iconColor: "#3b82f6",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      durationMinutes: 200,
      totalQuestions: 200,
      maxScore: 720,
      difficulty: "Moderate",
      difficultyColor: "text-blue-600 bg-blue-50 border-blue-200",
      description: "High-yield test designed with equal weightage to NCERT diagrams, assertion-reason, and numerical concepts.",
      tags: ["High Yield", "NTA Pattern", "Assertion-Reason"],
      sections: [
        {
          id: "phy",
          name: "Physics",
          questions: [
            {
              id: "m2-p1",
              num: 1,
              subject: "Physics",
              chapter: "Gravitation",
              difficulty: "Easy",
              text: "If the radius of Earth shrinks by 1% while its mass remains constant, the acceleration due to gravity on the Earth's surface will:",
              options: [
                "Increase by 2%",
                "Decrease by 2%",
                "Increase by 1%",
                "Decrease by 1%"
              ],
              correctAnswer: 0,
              explanation: "g = GM / R^2. dg/g = -2(dR/R) = -2(-1%) = +2%.",
              ncertReference: "NCERT Class 11 Physics, Chapter 8: Gravitation, Page 191"
            }
          ]
        },
        {
          id: "chem",
          name: "Chemistry",
          questions: [
            {
              id: "m2-c1",
              num: 2,
              subject: "Chemistry",
              chapter: "Thermodynamics",
              difficulty: "Medium",
              text: "For the exothermic reaction N2(g) + 3H2(g) <=> 2NH3(g) with Delta H < 0 and Delta S < 0, the reaction is spontaneous at:",
              options: [
                "Low temperature",
                "High temperature",
                "All temperatures",
                "Never spontaneous"
              ],
              correctAnswer: 0,
              explanation: "Delta G = Delta H - T*Delta S. For Delta G < 0 when both are negative, |Delta H| must be > T|Delta S|, which holds at lower temperatures.",
              ncertReference: "NCERT Class 11 Chemistry, Chapter 6: Thermodynamics, Page 179"
            }
          ]
        },
        {
          id: "bot",
          name: "Botany",
          questions: [
            {
              id: "m2-b1",
              num: 3,
              subject: "Botany",
              chapter: "Cell: The Unit of Life",
              difficulty: "Easy",
              text: "Which cell organelle is the major site for synthesis of lipid-like steroidal hormones in animal cells?",
              options: [
                "Smooth Endoplasmic Reticulum (SER)",
                "Rough Endoplasmic Reticulum (RER)",
                "Golgi Apparatus",
                "Peroxisomes"
              ],
              correctAnswer: 0,
              explanation: "In animal cells, steroidal hormones (estrogen, testosterone, cortisol) are synthesized in the Smooth Endoplasmic Reticulum.",
              ncertReference: "NCERT Class 11 Biology, Chapter 8: Cell, Page 133"
            }
          ]
        },
        {
          id: "zoo",
          name: "Zoology",
          questions: [
            {
              id: "m2-z1",
              num: 4,
              subject: "Zoology",
              chapter: "Human Reproduction",
              difficulty: "Easy",
              text: "Surgically cutting and tying a small portion of the vas deferens in males is called:",
              options: [
                "Vasectomy",
                "Tubectomy",
                "Coitus Interruptus",
                "Hysterectomy"
              ],
              correctAnswer: 0,
              explanation: "Vasectomy is the surgical sterilization procedure for males.",
              ncertReference: "NCERT Class 12 Biology, Chapter 4: Reproductive Health, Page 61"
            }
          ]
        }
      ]
    },
    {
      id: "mock-3",
      title: "Mock Test 3",
      subtitle: "Full Syllabus (NEET Pattern)",
      iconColor: "#f59e0b",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      durationMinutes: 200,
      totalQuestions: 200,
      maxScore: 720,
      difficulty: "Difficult",
      difficultyColor: "text-amber-600 bg-amber-50 border-amber-200",
      description: "Challenger level test with deep conceptual multi-statement questions, tricky calculations, and experimental setups.",
      tags: ["Challenger", "Rank Booster", "Deep Concepts"],
      sections: [
        {
          id: "phy",
          name: "Physics",
          questions: [
            {
              id: "m3-p1",
              num: 1,
              subject: "Physics",
              chapter: "Electromagnetic Induction",
              difficulty: "Hard",
              text: "A circular coil of radius 10 cm, 500 turns and resistance 2 \\Omega is rotated through 180 degrees in 0.25 s in a magnetic field of 3.0 x 10^-5 T. Magnitude of induced emf and current are:",
              options: [
                "3.8 mV, 1.9 mA",
                "1.9 mV, 0.95 mA",
                "7.6 mV, 3.8 mA",
                "0.95 mV, 0.48 mA"
              ],
              correctAnswer: 0,
              explanation: "Delta Phi = 2NBA = 2 x 500 x (3 x 10^-5) x (pi x 0.1^2) = 9.42 x 10^-4 Wb.\ne = Delta Phi / Delta t = 9.42 x 10^-4 / 0.25 = 3.77 mV approx 3.8 mV.\nI = e/R = 3.8 / 2 = 1.9 mA.",
              ncertReference: "NCERT Class 12 Physics, Chapter 6: EMI, Page 212"
            }
          ]
        },
        {
          id: "chem",
          name: "Chemistry",
          questions: [
            {
              id: "m3-c1",
              num: 2,
              subject: "Chemistry",
              chapter: "Equilibrium",
              difficulty: "Medium",
              text: "What is the pH of a buffer solution containing 0.2 M acetic acid and 0.1 M sodium acetate? (pKa of acetic acid = 4.74, log 2 = 0.301)",
              options: [
                "4.44",
                "5.04",
                "4.74",
                "3.74"
              ],
              correctAnswer: 0,
              explanation: "pH = pKa + log([Salt]/[Acid]) = 4.74 + log(0.1/0.2) = 4.74 - log 2 = 4.74 - 0.301 = 4.44.",
              ncertReference: "NCERT Class 11 Chemistry, Chapter 7: Equilibrium, Page 227"
            }
          ]
        },
        {
          id: "bot",
          name: "Botany",
          questions: [
            {
              id: "m3-b1",
              num: 3,
              subject: "Botany",
              chapter: "Genetics",
              difficulty: "Medium",
              text: "In a dihybrid cross (TTRR x ttrr), what is the phenotypic proportion of recombinant offspring in the F2 generation?",
              options: [
                "6/16",
                "9/16",
                "1/16",
                "10/16"
              ],
              correctAnswer: 0,
              explanation: "Recombinant types in 9:3:3:1 ratio are Tall White (3) and Dwarf Red (3), total = (3+3)/16 = 6/16.",
              ncertReference: "NCERT Class 12 Biology, Chapter 5: Principles of Inheritance, Page 79"
            }
          ]
        },
        {
          id: "zoo",
          name: "Zoology",
          questions: [
            {
              id: "m3-z1",
              num: 4,
              subject: "Zoology",
              chapter: "Neural Control",
              difficulty: "Medium",
              text: "During the generation of an action potential along an axon, rapid depolarization occurs due to:",
              options: [
                "Rapid influx of Na+ ions",
                "Rapid efflux of K+ ions",
                "Active pump of Ca2+ ions",
                "Influx of Cl- ions"
              ],
              correctAnswer: 0,
              explanation: "Opening of voltage-gated Na+ channels allows rapid influx of sodium ions down concentration gradient, reversing membrane polarity.",
              ncertReference: "NCERT Class 11 Biology, Chapter 21: Neural Control, Page 317"
            }
          ]
        }
      ]
    },
    {
      id: "mock-4",
      title: "Mock Test 4",
      subtitle: "Full Syllabus (NEET Pattern)",
      iconColor: "#8b5cf6",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      durationMinutes: 200,
      totalQuestions: 200,
      maxScore: 720,
      difficulty: "Moderate",
      difficultyColor: "text-purple-600 bg-purple-50 border-purple-200",
      description: "Balanced full mock emphasizing speed management, time-per-question calibration, and eliminating negative marking.",
      tags: ["Time Management", "Speed Calibrator", "Section A & B"],
      sections: [
        {
          id: "phy",
          name: "Physics",
          questions: [
            {
              id: "m4-p1",
              num: 1,
              subject: "Physics",
              chapter: "Waves",
              difficulty: "Medium",
              text: "The fundamental frequency of an open organ pipe is 300 Hz. The first overtone of this open pipe equals the first overtone of a closed pipe. The length of closed pipe is: (v = 330 m/s)",
              options: [
                "41.25 cm",
                "27.5 cm",
                "55.0 cm",
                "13.75 cm"
              ],
              correctAnswer: 0,
              explanation: "Open pipe first overtone = 2 * 300 = 600 Hz.\nClosed pipe first overtone = 3v / (4Lc) = 600 => Lc = 3(330)/(4*600) = 0.4125 m = 41.25 cm.",
              ncertReference: "NCERT Class 11 Physics, Chapter 15: Waves, Page 382"
            }
          ]
        },
        {
          id: "chem",
          name: "Chemistry",
          questions: [
            {
              id: "m4-c1",
              num: 2,
              subject: "Chemistry",
              chapter: "Chemical Kinetics",
              difficulty: "Easy",
              text: "For a first order reaction, the time required for 99% completion is how many times the time for 90% completion?",
              options: [
                "2 times",
                "3 times",
                "4 times",
                "1.5 times"
              ],
              correctAnswer: 0,
              explanation: "t99% = (2.303/k) * log(100/1) = 2*(2.303/k). t90% = (2.303/k) * log(100/10) = 1*(2.303/k). Ratio = 2.",
              ncertReference: "NCERT Class 12 Chemistry, Chapter 4: Kinetics, Page 108"
            }
          ]
        },
        {
          id: "bot",
          name: "Botany",
          questions: [
            {
              id: "m4-b1",
              num: 3,
              subject: "Botany",
              chapter: "Ecosystem",
              difficulty: "Easy",
              text: "Which of the following ecosystems characteristically exhibits an inverted pyramid of biomass?",
              options: [
                "Open ocean / Marine ecosystem",
                "Grassland ecosystem",
                "Forest ecosystem",
                "Desert ecosystem"
              ],
              correctAnswer: 0,
              explanation: "In oceans, phytoplankton biomass at any instant is far less than zooplankton and fishes, producing an inverted pyramid.",
              ncertReference: "NCERT Class 12 Biology, Chapter 14: Ecosystem, Page 248"
            }
          ]
        },
        {
          id: "zoo",
          name: "Zoology",
          questions: [
            {
              id: "m4-z1",
              num: 4,
              subject: "Zoology",
              chapter: "Locomotion",
              difficulty: "Easy",
              text: "During skeletal muscle contraction, which band/zone of the sarcomere narrows and disappears?",
              options: [
                "H-zone",
                "A-band",
                "M-line",
                "Z-disc"
              ],
              correctAnswer: 0,
              explanation: "During sliding filament contraction, the I-band and H-zone shorten and disappear while the A-band length stays constant.",
              ncertReference: "NCERT Class 11 Biology, Chapter 20: Locomotion, Page 307"
            }
          ]
        }
      ]
    },
    {
      id: "mock-5",
      title: "Mock Test 5",
      subtitle: "Full Syllabus (NEET Pattern)",
      iconColor: "#0d9488",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
      durationMinutes: 200,
      totalQuestions: 200,
      maxScore: 720,
      difficulty: "Moderate",
      difficultyColor: "text-teal-600 bg-teal-50 border-teal-200",
      description: "Final NEET dress-rehearsal with standard distribution of memory, application, and numerical problem types.",
      tags: ["Final Rehearsal", "NCERT Line-by-Line", "Standard Pattern"],
      sections: [
        {
          id: "phy",
          name: "Physics",
          questions: [
            {
              id: "m5-p1",
              num: 1,
              subject: "Physics",
              chapter: "Electrostatics",
              difficulty: "Medium",
              text: "An electric dipole of dipole moment p is aligned in a uniform electric field E. The work done in rotating it by 180 degrees is:",
              options: [
                "2pE",
                "pE",
                "-2pE",
                "0"
              ],
              correctAnswer: 0,
              explanation: "W = -pE(cos 180 - cos 0) = -pE(-1 - 1) = 2pE.",
              ncertReference: "NCERT Class 12 Physics, Chapter 1: Electric Charges & Fields, Page 31"
            }
          ]
        },
        {
          id: "chem",
          name: "Chemistry",
          questions: [
            {
              id: "m5-c1",
              num: 2,
              subject: "Chemistry",
              chapter: "Solutions",
              difficulty: "Medium",
              text: "A 0.004 M aqueous solution of Na2SO4 is isotonic with 0.010 M glucose solution. The apparent degree of dissociation of Na2SO4 is:",
              options: [
                "75%",
                "50%",
                "85%",
                "90%"
              ],
              correctAnswer: 0,
              explanation: "i1 * 0.004 = 1 * 0.010 => i = 2.5.\nFor Na2SO4 -> 2Na+ + SO4(2-), n = 3.\nalpha = (i-1)/(n-1) = (2.5-1)/(3-1) = 1.5/2 = 75%.",
              ncertReference: "NCERT Class 12 Chemistry, Chapter 2: Solutions, Page 57"
            }
          ]
        },
        {
          id: "bot",
          name: "Botany",
          questions: [
            {
              id: "m5-b1",
              num: 3,
              subject: "Botany",
              chapter: "Biotechnology Applications",
              difficulty: "Easy",
              text: "RNA interference (RNAi) involves gene silencing of a specific mRNA due to binding of a complementary:",
              options: [
                "dsRNA molecule",
                "ssDNA molecule",
                "tRNA molecule",
                "rRNA molecule"
              ],
              correctAnswer: 0,
              explanation: "RNAi silences target mRNA translation via complementary double-stranded RNA (dsRNA).",
              ncertReference: "NCERT Class 12 Biology, Chapter 12: Biotechnology, Page 209"
            }
          ]
        },
        {
          id: "zoo",
          name: "Zoology",
          questions: [
            {
              id: "m5-z1",
              num: 4,
              subject: "Zoology",
              chapter: "Breathing & Respiration",
              difficulty: "Easy",
              text: "What percentage of carbon dioxide is transported in human blood as bicarbonate ions (HCO3-)?",
              options: [
                "70%",
                "20-25%",
                "7%",
                "97%"
              ],
              correctAnswer: 0,
              explanation: "70% of CO2 is carried as bicarbonate, ~20-25% as carbamino-hemoglobin, and 7% dissolved in plasma.",
              ncertReference: "NCERT Class 11 Biology, Chapter 17: Breathing, Page 274"
            }
          ]
        }
      ]
    }
  ],
  chapterTests: [
    {
      id: "ch-1",
      title: "Genetics & Molecular Basis",
      subtitle: "Class 12 Botany & Zoology",
      subject: "Biology",
      iconColor: "#059669",
      durationMinutes: 45,
      totalQuestions: 45,
      maxScore: 180,
      difficulty: "High Yield",
      difficultyColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description: "Master Mendelian principles, linkage, DNA replication, transcription, translation, and Lac Operon.",
      tags: ["High Weightage", "18-20 Qs in NEET"],
      sections: [
        {
          id: "genetics",
          name: "Genetics Test",
          questions: [
            {
              id: "ch1-q1",
              num: 1,
              subject: "Biology",
              chapter: "Molecular Basis of Inheritance",
              difficulty: "Medium",
              text: "If the sequence of nitrogen bases in the coding strand of DNA is 5'-ATGCATGC-3', the sequence of bases in its mRNA transcript will be:",
              options: [
                "5'-AUGCAUGC-3'",
                "5'-UACGUACG-3'",
                "3'-AUGCAUGC-5'",
                "3'-UACGUACG-5'"
              ],
              correctAnswer: 0,
              explanation: "The sequence of mRNA is identical to the coding strand (sense strand), except thymine (T) is replaced by uracil (U). Thus 5'-AUGCAUGC-3'.",
              ncertReference: "NCERT Class 12 Biology, Chapter 6: Molecular Basis, Page 98"
            }
          ]
        }
      ]
    },
    {
      id: "ch-2",
      title: "Ray & Wave Optics",
      subtitle: "Class 12 Physics",
      subject: "Physics",
      iconColor: "#2563eb",
      durationMinutes: 45,
      totalQuestions: 45,
      maxScore: 180,
      difficulty: "Conceptual",
      difficultyColor: "text-blue-600 bg-blue-50 border-blue-200",
      description: "Lenses, mirrors, optical instruments, Young's double slit interference, and diffraction.",
      tags: ["Formula Heavy", "Ray Diagrams"],
      sections: [
        {
          id: "optics",
          name: "Optics Chapter Test",
          questions: [
            {
              id: "ch2-q1",
              num: 1,
              subject: "Physics",
              chapter: "Wave Optics",
              difficulty: "Medium",
              text: "In Young's double slit experiment, if the distance between slits is halved and screen distance is doubled, the fringe width beta becomes:",
              options: [
                "4 times",
                "2 times",
                "Half",
                "Unchanged"
              ],
              correctAnswer: 0,
              explanation: "beta = lambda * D / d. If D' = 2D and d' = d/2, beta' = lambda*(2D)/(d/2) = 4*(lambda * D / d) = 4*beta.",
              ncertReference: "NCERT Class 12 Physics, Chapter 10: Wave Optics, Page 360"
            }
          ]
        }
      ]
    }
  ],
  subjectTests: [
    {
      id: "sub-phy",
      title: "Physics Full Subject Test",
      subtitle: "Class 11 & 12 Complete Physics",
      subject: "Physics",
      iconColor: "#3b82f6",
      durationMinutes: 60,
      totalQuestions: 50,
      maxScore: 180,
      difficulty: "Moderate",
      difficultyColor: "text-blue-600 bg-blue-50 border-blue-200",
      description: "Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics and SHM.",
      tags: ["50 Questions", "Strict Timer", "All Chapters"],
      sections: [
        {
          id: "phy-full",
          name: "Physics Subject Test",
          questions: [
            {
              id: "sp-1",
              num: 1,
              subject: "Physics",
              chapter: "Kinematics",
              difficulty: "Easy",
              text: "A ball is thrown vertically upwards with velocity 20 m/s from the top of a 25 m high tower. Time taken to reach the ground is (g = 10 m/s^2):",
              options: [
                "5 s",
                "4 s",
                "6 s",
                "3 s"
              ],
              correctAnswer: 0,
              explanation: "Using s = ut + 1/2 a t^2 with downward as positive: +25 = -20t + 5t^2 => 5t^2 - 20t - 25 = 0 => t^2 - 4t - 5 = 0 => (t-5)(t+1) = 0 => t = 5 s.",
              ncertReference: "NCERT Class 11 Physics, Chapter 3: Motion in a Straight Line"
            }
          ]
        }
      ]
    },
    {
      id: "sub-bio",
      title: "Biology Full Subject Test",
      subtitle: "Botany & Zoology Combined (360 Marks)",
      subject: "Biology",
      iconColor: "#10b981",
      durationMinutes: 90,
      totalQuestions: 100,
      maxScore: 360,
      difficulty: "High Yield",
      difficultyColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description: "Full NCERT Biology coverage for maximum score booster (Target 350+/360).",
      tags: ["100 Questions", "NCERT Lines", "Speed Booster"],
      sections: [
        {
          id: "bio-full",
          name: "Biology Subject Test",
          questions: [
            {
              id: "sb-1",
              num: 1,
              subject: "Biology",
              chapter: "Human Physiology",
              difficulty: "Easy",
              text: "The heart sounds 'LUBB' and 'DUBB' are produced due to closure of which valves respectively?",
              options: [
                "AV valves (Tricuspid/Bicuspid) and Semilunar valves",
                "Semilunar valves and AV valves",
                "Tricuspid and Bicuspid valves",
                "Aortic valve and Pulmonary valve"
              ],
              correctAnswer: 0,
              explanation: "First sound (Lubb) = closure of Atrioventricular (Tricuspid & Bicuspid) valves during ventricular systole. Second sound (Dubb) = closure of Semilunar valves at onset of ventricular diastole.",
              ncertReference: "NCERT Class 11 Biology, Chapter 18: Body Fluids & Circulation, Page 285"
            }
          ]
        }
      ]
    }
  ]
};
