# Multi-Agent Systems Exam Questions
Based on lecture transcripts and study guide analysis.
---
## Section 1: Emergence & Core Concepts
**Q1.** What is emergence in the context of multi-agent systems?
- A) When agents are programmed with complex behaviors
- B) When complex patterns arise from simple individual rules
- C) When the system runs out of memory
- D) When agents communicate directly with each other
**Answer: B**
---
**Q2.** Which of the following is an example of emergence?
- A) A single ant following a pheromone trail
- B) A programmer writing code for a simulation
- C) Complex colony behavior arising from simple ant rules
- D) An agent receiving instructions from an observer
**Answer: C**
---
**Q3.** The concept of "multi-realizability" in agent-based modeling refers to:
- A) Running multiple simulations at once
- B) Different internal mechanisms producing the same observable behavior
- C) Agents that can exist in multiple environments
- D) Using multiple programming languages
**Answer: B**
---
## Section 2: Agent Definitions
**Q4.** According to the minimal definition, what is an agent?
- A) Any computer program
- B) An autonomous entity that perceives and acts on its environment
- C) A mathematical equation
- D) A network node
**Answer: B**
---
**Q5.** Which of the following is NOT a key characteristic of agents?
- A) Autonomy
- B) Reactivity
- C) Determinism
- D) Social ability
**Answer: C**
---
**Q6.** What makes a system a "multi-agent system"?
- A) It uses multiple computers
- B) Multiple agents interacting in a shared environment
- C) It runs on multiple operating systems
- D) It has multiple user interfaces
**Answer: B**
---
## Section 3: NetLogo Fundamentals
**Q7.** In NetLogo, what is the purpose of the `setup` procedure?
- A) To run the simulation continuously
- B) To initialize the model and create agents
- C) To export data to a file
- D) To display error messages
**Answer: B**
---
**Q8.** What is the difference between `go` and `go-once` in NetLogo?
- A) `go` runs once, `go-once` runs continuously
- B) `go` runs continuously, `go-once` runs for one tick
- C) They are identical
- D) `go-once` is faster than `go`
**Answer: B**
---
**Q9.** In NetLogo, what are "turtles"?
- A) The environment cells
- B) Mobile agents that can move around the world
- C) Links between patches
- D) The observer entity
**Answer: B**
---
**Q10.** What are "patches" in NetLogo?
- A) Mobile agents
- B) Connection links
- C) Fixed cells that make up the environment grid
- D) Error fixes
**Answer: C**
---
## Section 4: Agent Cognition Types
**Q11.** A reflexive agent is characterized by:
- A) Learning from past experiences
- B) Following simple if-then rules
- C) Optimizing a utility function
- D) Having specific goals to achieve
**Answer: B**
---
**Q12.** In the traffic model, agents that speed up when no car is ahead and slow down otherwise are examples of:
- A) Adaptive agents
- B) Goal-based agents
- C) Reflexive agents
- D) Utility-based agents
**Answer: C**
---
**Q13.** An agent that optimizes an efficiency function to minimize travel time is an example of:
- A) Reflexive agent
- B) Utility-based agent
- C) Purely random agent
- D) Static agent
**Answer: B**
---
**Q14.** Goal-based agents differ from reflexive agents in that they:
- A) Follow simpler rules
- B) Work toward specific destinations or objectives
- C) Cannot interact with other agents
- D) Only operate in 2D environments
**Answer: B**
---
**Q15.** Adaptive agents are characterized by their ability to:
- A) Follow only predetermined rules
- B) Learn and change strategies based on prior history
- C) Operate without any memory
- D) Ignore other agents
**Answer: B**
---
**Q16.** In the El Farol bar model, agents exhibit which type of cognition?
- A) Pure reflexive
- B) Adaptive (using history of bar attendance)
- C) No cognition at all
- D) Only goal-based
**Answer: B**
---
## Section 5: Specific Models
**Q17.** In the fire model, what is the approximate critical density threshold for fire spread?
- A) 25%
- B) 40%
- C) 59%
- D) 85%
**Answer: C**
---
**Q18.** What phenomenon does the Wolf-Sheep predator-prey model typically demonstrate?
- A) Constant population levels
- B) Oscillating population dynamics
- C) Immediate extinction
- D) Infinite growth
**Answer: B**
---
**Q19.** The El Farol bar model is primarily used to study:
- A) Disease transmission
- B) Bounded rationality and adaptive decision-making
- C) Fire spread patterns
- D) Predator-prey dynamics
**Answer: B**
---
**Q20.** In the spread of disease model, what is the difference between mobile and environmental transmission?
- A) Mobile is faster
- B) Mobile requires direct agent contact; environmental leaves infection in patches
- C) There is no difference
- D) Environmental only affects observer
**Answer: B**
---
**Q21.** What does the disease decay parameter control in a disease spread model?
- A) How fast agents move
- B) How long infection persists in the environment
- C) The initial number of infected agents
- D) The simulation speed
**Answer: B**
---
**Q22.** The Amphora (Greek/Etruscan wine) model demonstrates:
- A) Fire spread mechanics
- B) Trade dynamics and cultural exchange over time
- C) Disease transmission
- D) Traffic congestion
**Answer: B**
---
## Section 6: Analysis Concepts
**Q23.** Why are multiple simulation runs necessary in ABM analysis?
- A) To use more computer memory
- B) To account for stochastic variation in the model
- C) To make the simulation slower
- D) Multiple runs are not necessary
**Answer: B**
---
**Q24.** Which of the following is NOT a valid approach to determine the number of runs?
- A) Following convention (e.g., 100 runs)
- B) Using coefficient of variation until stabilization
- C) Running until you get the results you want
- D) Power analysis based on expected effect size
**Answer: C**
---
**Q25.** What does a coefficient of variation plot help determine?
- A) The color of agents
- B) When variance has stabilized across runs
- C) The speed of the simulation
- D) Which agents to delete
**Answer: B**
---
**Q26.** Power analysis requires knowing:
- A) Only the number of agents
- B) The expected effect size and statistical test to be used
- C) The computer's processing speed
- D) The programmer's experience level
**Answer: B**
---
**Q27.** Sensitivity analysis in ABMs is primarily about:
- A) Making agents more sensitive to each other
- B) Understanding how model output changes with parameter variations
- C) Measuring agent emotions
- D) Increasing simulation speed
**Answer: B**
---
## Section 7: Model Building
**Q28.** What is the difference between a conceptual model and a software model?
- A) They are the same thing
- B) Conceptual is the abstract design; software is the implementation
- C) Software models are always simpler
- D) Conceptual models run faster
**Answer: B**
---
**Q29.** Verification in ABM development means:
- A) Checking if the model matches real-world phenomena
- B) Checking if the software correctly implements the conceptual model
- C) Running the model multiple times
- D) Adding more agents
**Answer: B**
---
**Q30.** Validation in ABM development means:
- A) Making sure the code compiles
- B) Checking if the model matches real-world phenomena or data
- C) Running setup only once
- D) Using the correct file format
**Answer: B**
---
**Q31.** Phenomena-based modeling is when:
- A) You explore what happens without a target
- B) You have existing data or patterns you want to match
- C) You ignore all data
- D) You only use 3D environments
**Answer: B**
---
**Q32.** Top-down model building typically involves:
- A) Starting with code and seeing what happens
- B) Starting with a conceptual model before implementing
- C) Ignoring research questions
- D) Only using Python
**Answer: B**
---
## Section 8: Adaptive Agents & Environments
**Q33.** Resilience in agent systems refers to:
- A) How fast agents move
- B) The ability to recover from perturbations or disturbances
- C) The number of agents in the system
- D) The color scheme used
**Answer: B**
---
**Q34.** Subsistence in agent-based models refers to:
- A) Agents maintaining themselves (energy, resources, reproduction)
- B) Agents running very slowly
- C) Removing agents from the simulation
- D) Pausing the simulation
**Answer: B**
---
**Q35.** The marginal value theorem in foraging models suggests:
- A) Agents should never move
- B) Agents should leave a patch when return rate falls below average
- C) Agents should always stay in one location
- D) Only wolves should forage
**Answer: B**
---
**Q36.** A toroidal environment in ABMs means:
- A) The world is 3D
- B) Edges wrap around (left connects to right, top to bottom)
- C) Agents cannot move
- D) The environment is hexagonal
**Answer: B**
---
## Section 9: Cultural Attractors Paper
**Q37.** In the Flandres & Smaldino cultural attractors paper, what are cultural attractors?
- A) Physical magnets in the model
- B) Emergent stable points from cognitive alignment in a population
- C) Random noise in the system
- D) External forces applied to agents
**Answer: B**
---
**Q38.** Which of the following is NOT one of the three metrics studied in the cultural attractors model?
- A) Complexity
- B) Stability
- C) Conformity
- D) Velocity
**Answer: D**
---
**Q39.** In the cultural attractors model, what effect does noise have?
- A) It always destroys the simulation
- B) Some noise can be beneficial for stability
- C) Noise has no effect
- D) Noise only affects color
**Answer: B**
---
**Q40.** The cultural attractors model found that longer learning times:
- A) Always increase complexity
- B) Can reduce complexity of distributions
- C) Have no effect on the model
- D) Crash the simulation
**Answer: B**
---
## Answer Key
| Q | Answer | Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|---|--------|
| 1 | B | 11 | B | 21 | B | 31 | B |
| 2 | C | 12 | C | 22 | B | 32 | B |
| 3 | B | 13 | B | 23 | B | 33 | B |
| 4 | B | 14 | B | 24 | C | 34 | B |
| 5 | C | 15 | B | 25 | B | 35 | B |
| 6 | B | 16 | B | 26 | B | 36 | B |
| 7 | B | 17 | C | 27 | B | 37 | B |
| 8 | B | 18 | B | 28 | B | 38 | D |
| 9 | B | 19 | B | 29 | B | 39 | B |
| 10 | C | 20 | B | 30 | B | 40 | B |
---
**Topics Covered:**
- Emergence (Q1-3)
- Agent Definitions (Q4-6)
- NetLogo (Q7-10)
- Agent Cognition Types (Q11-16)
- Specific Models (Q17-22)
- Analysis Concepts (Q23-27)
- Model Building (Q28-32)
- Adaptive Agents & Environments (Q33-36)
- Cultural Attractors Paper (Q37-40)
