Exam_questions-1
# Multi-Agent Systems - 100 Predicted Exam Questions
Based on study guide topics, lecture materials, and key concepts emphasized throughout the course.
---
## Section 1: Emergence (Questions 1-8)
**1.** What is emergence in the context of multi-agent systems?
- A) Behavior that is explicitly programmed into individual agents
- B) Macro-level patterns arising from micro-level interactions that weren't explicitly programmed
- C) The process of agents appearing in a simulation
- D) Central coordination of agent behaviors
**Answer: B** - Emergence happens when macro-level patterns arise from micro-level interactions that weren't explicitly programmed.
---
**2.** Which of the following is an example of emergent behavior?
- A) A programmed traffic light changing colors on a timer
- B) Traffic jams forming without any accident
- C) A robot following a pre-defined path
- D) A computer executing a line of code
**Answer: B** - Traffic jams can form spontaneously from individual driving behaviors without any central cause.
---
**3.** What is a key characteristic of emergence?
- A) It is completely predictable from individual behaviors
- B) It requires central coordination
- C) Complex behaviors come from simple rules (bottom-up)
- D) It follows linear dynamics
**Answer: C** - Emergence is a bottom-up phenomenon where complex behaviors arise from simple individual rules.
---
**4.** In the Schelling segregation model, what causes extreme residential segregation?
- A) Agents programmed to seek complete segregation
- B) Mild individual preferences leading to emergent macro-patterns
- C) Central planners directing agents to specific locations
- D) Random initial placement that persists
**Answer: B** - The model demonstrates how mild preferences (e.g., wanting just 30% similar neighbors) can produce extreme segregation as an emergent outcome.
---
**5.** Why is emergence considered "surprising" in ABMs?
- A) Because it always produces the same result
- B) Because outcomes are non-linear and unpredictable from individual rules alone
- C) Because the code contains errors
- D) Because agents communicate directly about macro-level goals
**Answer: B** - Emergence produces results that are often unexpected and non-linear.
---
**6.** Which statement about emergence is FALSE?
- A) Emergence is guaranteed in every multi-agent system
- B) Emergence depends on interaction rules
- C) Emergent behavior depends on environmental structure
- D) Emergent behavior depends on initial conditions
**Answer: A** - Emergence is NOT guaranteed; some MAS may show no interesting macro-level behavior.
---
**7.** In ant colonies, how does complex nest-building behavior emerge?
- A) A queen ant provides detailed building instructions
- B) Individual ants follow simple local rules without a master plan
- C) Ants are programmed with complete blueprints
- D) External architects design the structure
**Answer: B** - Ant colonies build complex structures through simple local rules without any architect or master plan.
---
**8.** How do instructors suggest students should approach emergence in ABMs?
- A) Assume emergence will happen
- B) Program desired emergent properties directly
- C) Make predictions before running, observe deviations, and explain why outcomes differ
- D) Run simulations until emergence appears
**Answer: C** - Students should predict-before-simulate, then explain deviations.
---
## Section 2: Agents and Multi-Agent Systems (Questions 9-18)
**9.** What are the four key characteristics of an agent?
- A) Speed, size, color, location
- B) Autonomy, reactivity, proactivity, social ability
- C) Memory, intelligence, speed, strength
- D) Population, density, resource use, lifespan
**Answer: B** - Agents have autonomy, reactivity, proactivity, and social ability.
---
**10.** What does "autonomy" mean for an agent?
- A) The agent follows exact instructions at all times
- B) The agent operates independently without constant external direction
- C) The agent can only move in one direction
- D) The agent has infinite energy
**Answer: B** - Autonomous agents operate independently.
---
**11.** What is "reactivity" in the context of agent characteristics?
- A) The ability to initiate goal-directed behavior
- B) The ability to perceive and respond to the environment
- C) The ability to communicate with other agents
- D) The ability to exist within an environment
**Answer: B** - Reactivity is sensing and responding to the environment.
---
**12.** What distinguishes a multi-agent system from a simple collection of entities?
- A) Having many components
- B) Being simulated on a computer
- C) Agents having potential for interaction and information exchange
- D) All components being identical
**Answer: C** - A MAS requires potential for interaction and information exchange between agents.
---
**13.** According to the course, what is the relationship between ABM and MAS?
- A) They are identical concepts
- B) ABM is a method; MAS is a theoretical construct
- C) MAS is a software tool; ABM is a theory
- D) Both are types of equation-based models
**Answer: B** - ABM is a methodology; MAS is a theoretical framework. They overlap but aren't identical.
---
**14.** In NetLogo, which entities can be treated as "agents" from a programming perspective?
- A) Only turtles
- B) Only patches
- C) Turtles, patches, and links
- D) Only the observer
**Answer: C** - All three (turtles, patches, links) can be agents in NetLogo implementation.
---
**15.** What makes something a "social ability" in agent terms?
- A) The agent can move quickly
- B) The agent can interact with other agents
- C) The agent has memory
- D) The agent can reproduce
**Answer: B** - Social ability means interacting with other agents (and possibly humans).
---
**16.** What does "proactivity" mean for an agent?
- A) Reacting to the environment
- B) Taking initiative and exhibiting goal-directed behavior
- C) Following other agents
- D) Staying in one location
**Answer: B** - Proactivity is taking initiative toward goals, like studying without being reminded.
---
**17.** In the course, why is the distinction between conceptual agents and implementation agents important?
- A) It helps choose programming languages
- B) It prevents confusing what NetLogo calls an agent with philosophical agency
- C) It determines model speed
- D) It affects visualization colors
**Answer: B** - Students should keep conceptual (theoretical) agents separate from implementation agents (NetLogo entities).
---
**18.** Which is NOT a necessary condition for a system to be considered a multi-agent system?
- A) Potential for interaction
- B) Sensitivity to local conditions
- C) A central controller directing all agents
- D) Information exchange (direct or indirect)
**Answer: C** - MAS have NO central controller; this is a distributed system property.
---
## Section 3: ABMs versus Other Approaches (Questions 19-28)
**19.** What is an advantage of ABMs over equation-based models?
- A) ABMs are always faster to run
- B) ABMs can capture heterogeneity among individuals
- C) ABMs have clear analytical solutions
- D) ABMs require fewer parameters
**Answer: B** - ABMs can model individuals with different behaviors, unlike equation-based models that assume homogeneity.
---
**20.** What is a disadvantage of ABMs compared to equation-based models?
- A) ABMs cannot model spatial relationships
- B) ABMs are computationally intensive and results are stochastic
- C) ABMs cannot handle multiple agent types
- D) ABMs cannot model emergence
**Answer: B** - ABMs are slow to run and require multiple runs due to randomness.
---
**21.** What is an advantage of ABMs over laboratory experiments?
- A) ABMs test real human behavior
- B) ABMs can test scenarios impossible or unethical in real life
- C) ABMs always have higher validity
- D) ABMs cost more money
**Answer: B** - ABMs allow testing scenarios that would be impossible, unethical, or impractical in real experiments.
---
**22.** When are ABMs most appropriate to use?
- A) When all agents are identical and closed-form solutions exist
- B) When individuals interact in complex ways and space matters
- C) When interaction is irrelevant
- D) When only average behavior matters
**Answer: B** - ABMs are best when agents interact complexly, space matters, and individual differences are important.
---
**23.** Which is NOT an appropriate use case for ABMs?
- A) Studying disease spread through social networks
- B) Understanding cultural transmission processes
- C) Finding an analytical solution to a simple equation
- D) Exploring how segregation emerges from preferences
**Answer: C** - If analytical solutions exist and interaction is irrelevant, ABMs are less useful.
---
**24.** Why can't individual cognitive models simply "scale up" to populations?
- A) Computers aren't fast enough
- B) Two interacting agents are not simply "twice" one agent; interaction changes the system qualitatively
- C) Populations are always homogeneous
- D) Cognitive models don't use mathematics
**Answer: B** - Interaction changes systems qualitatively; scaling isn't just multiplication.
---
**25.** What advantage do ABMs have regarding "what-if" scenarios?
- A) They can only test realistic scenarios
- B) They can test situations that are unethical or impossible in real life
- C) They cannot vary parameters
- D) They must match real data exactly
**Answer: B** - ABMs enable exploration of counterfactual scenarios safely.
---
**26.** Why might equation-based models be preferred over ABMs in some cases?
- A) When you need to model individual differences
- B) When you need clear analytical solutions and the system is homogeneous
- C) When spatial dynamics are important
- D) When emergence is the main interest
**Answer: B** - Equation-based models are better when systems are homogeneous and analytical solutions are needed.
---
**27.** What is the relationship between ABMs and feedback loops?
- A) ABMs cannot represent feedback loops
- B) ABMs naturally represent feedback loops where actions change future inputs
- C) Feedback loops are only possible in equation-based models
- D) ABMs eliminate all feedback from systems
**Answer: B** - ABMs naturally capture feedback where cognition is embedded in environments that change based on actions.
---
**28.** What does the course say about ABMs that produce impressive simulations but lack scientific rigor?
- A) They are the best kind of ABMs
- B) They are warned against; ABMs should be scientific instruments, not just flashy simulations
- C) They should only be used for teaching
- D) They are acceptable for publication
**Answer: B** - The course emphasizes ABMs as scientific instruments, not just visually impressive simulations.
---
## Section 4: Cognitive vs Generative Models (Questions 29-33)
**29.** What is the primary purpose of a cognitive model?
- A) To reproduce observed patterns without concern for mechanism
- B) To understand HOW something works internally (the mechanism)
- C) To run as fast as possible
- D) To avoid using agents
**Answer: B** - Cognitive models focus on understanding internal mechanisms and psychological realism.
---
**30.** What is the primary purpose of a generative model?
- A) To replicate actual cognitive processes
- B) To reproduce WHAT happens (the patterns/outcomes) regardless of internal mechanism
- C) To study memory retrieval
- D) To maximize psychological accuracy
**Answer: B** - Generative models aim to reproduce observed patterns without necessarily matching actual mechanisms.
---
**31.** The Schelling segregation model is an example of which type?
- A) Cognitive model
- B) Generative model
- C) Equation-based model
- D) Laboratory experiment
**Answer: B** - Schelling is generative: agents act "as if" they have simple preferences, producing realistic patterns without modeling actual cognition.
---
**32.** What does it mean when a generative model uses "as-if" scenarios?
- A) Agents have complete knowledge of all other agents
- B) Agents act as if following a rule without that rule being psychologically realistic
- C) The model uses analytical equations
- D) The model tests real human subjects
**Answer: B** - "As-if" means agents behave AS IF following a rule, without requiring that rule to reflect actual cognition.
---
**33.** Which statement correctly distinguishes cognitive from generative models?
- A) Cognitive models prioritize pattern reproduction; generative models prioritize mechanism
- B) Cognitive models prioritize psychological accuracy; generative models prioritize pattern reproduction
- C) Both types focus exclusively on analytical solutions
- D) There is no distinction between them
**Answer: B** - Cognitive = mechanism-focused; Generative = pattern-focused.
---
## Section 5: NetLogo Basics (Questions 34-45)
**34.** What are "turtles" in NetLogo?
- A) The stationary grid cells
- B) Mobile agents that can move around
- C) Connections between agents
- D) The global overseer of the model
**Answer: B** - Turtles are mobile agents (the "actors").
---
**35.** What are "patches" in NetLogo?
- A) Mobile agents
- B) Stationary grid cells that can have properties
- C) Connections between turtles
- D) Buttons on the interface
**Answer: B** - Patches are the stationary "stage squares" that form the environment.
---
**36.** What is the purpose of the "setup" procedure in NetLogo?
- A) To run the simulation continuously
- B) To initialize the model and put everything in starting positions
- C) To export data
- D) To change colors mid-simulation
**Answer: B** - Setup clears the world, creates agents, and sets initial conditions.
---
**37.** What is the difference between "go" and "go-once" in NetLogo?
- A) Go runs one step; go-once runs continuously
- B) Go runs continuously; go-once takes just one step
- C) They are identical
- D) Neither runs the simulation
**Answer: B** - Go loops continuously; go-once advances one time step.
---
**38.** What does the NetLogo command `ask turtles [forward 1]` do?
- A) Makes one turtle move forward
- B) Makes all turtles move forward 1 step
- C) Asks turtles a question
- D) Creates new turtles
**Answer: B** - `ask turtles [...]` tells ALL turtles to execute the command.
---
**39.** What does `neighbors` return in NetLogo?
- A) All turtles in the world
- B) The 8 surrounding patches (Moore neighborhood)
- C) The 4 adjacent patches only
- D) All patches in the world
**Answer: B** - `neighbors` returns the 8 surrounding patches (Moore neighborhood).
---
**40.** What does `neighbors4` return in NetLogo?
- A) Any 4 random patches
- B) The 4 adjacent patches (von Neumann neighborhood, no diagonals)
- C) 4 random turtles
- D) The 8 surrounding patches
**Answer: B** - `neighbors4` returns only the 4 adjacent patches (up, down, left, right).
---
**41.** How do you create 10 new turtles in NetLogo?
- A) `make-turtles 10`
- B) `create-turtles 10`
- C) `spawn 10`
- D) `add-agents 10`
**Answer: B** - `create-turtles n` creates n new turtles.
---
**42.** What does the `tick` command do in NetLogo?
- A) Creates a new turtle
- B) Advances the time counter by 1
- C) Stops the simulation
- D) Changes patch colors
**Answer: B** - `tick` advances the time counter by 1.
---
**43.** What does `random 10` return in NetLogo?
- A) Always the number 10
- B) A random whole number from 0 to 9
- C) A random decimal from 0.0 to 10.0
- D) A random turtle
**Answer: B** - `random n` returns integer from 0 to n-1.
---
**44.** What is the purpose of the NetLogo "observer"?
- A) It is a mobile agent
- B) It oversees the entire model and has a global perspective
- C) It is a type of patch
- D) It only appears during setup
**Answer: B** - The observer is the "director" with global model view.
---
**45.** Which tab in NetLogo contains the actual programming code?
- A) Interface tab
- B) Info tab
- C) Code tab
- D) Plot tab
**Answer: C** - The Code tab contains the procedures and programming.
---
## Section 6: Specific Models (Questions 46-65)
### Fire Model
**46.** What does the Fire model primarily demonstrate?
- A) How fires are extinguished
- B) Percolation thresholds and phase transitions
- C) How firefighters coordinate
- D) Weather patterns
**Answer: B** - The Fire model shows percolation (connectivity) thresholds.
---
**47.** What is the critical density threshold in the basic Fire model?
- A) Approximately 20%
- B) Approximately 40%
- C) Approximately 59%
- D) Approximately 80%
**Answer: C** - Around 59% density, fire transitions from not crossing to crossing the forest.
---
**48.** What happens below the critical density in the Fire model?
- A) Fire always spreads to the opposite edge
- B) Fire burns out before reaching the opposite edge
- C) Trees grow faster
- D) Fire jumps randomly
**Answer: B** - Below critical density, fire doesn't percolate—it dies out before crossing.
---
### Diffusion Limited Aggregation (DLA)
**49.** What type of pattern does DLA produce?
- A) Perfect circles
- B) Random dots
- C) Branching, fractal patterns
- D) Straight lines
**Answer: C** - DLA creates branching, tree-like, self-similar fractal structures.
---
**50.** What is the mechanism of DLA?
- A) Particles follow a central command
- B) Particles wander randomly and stick when touching existing structure
- C) Particles are pushed by wind
- D) Particles attract each other from a distance
**Answer: B** - Particles do random walks and stick on contact with the aggregate.
---
**51.** Which is NOT a real-world application of DLA patterns?
- A) Snowflake formation
- B) Lightning branching
- C) Traffic flow
- D) Crystal growth
**Answer: C** - Traffic flow is not a DLA application. DLA applies to growth processes like crystals, lightning, and snowflakes.
---
### Predator-Prey (Wolf-Sheep)
**52.** What is characteristic of predator-prey population dynamics?
- A) Both populations stay constant
- B) Oscillating population cycles
- C) Predators always go extinct
- D) Prey double every time step
**Answer: B** - Predator-prey systems show characteristic oscillating cycles.
---
**53.** In the Wolf-Sheep model, why do predator populations decrease after prey populations decrease?
- A) Predators migrate away
- B) Without prey, predators starve
- C) Predators reproduce less when happy
- D) The model has an error
**Answer: B** - Fewer prey means predators run out of food and die, completing the cycle.
---
**54.** Adding grass regrowth to the Wolf-Sheep model creates what kind of system?
- A) A one-level system
- B) A two-level system
- C) A three-level system (grass → sheep → wolves)
- D) An infinite-level system
**Answer: C** - With grass, you have three trophic levels.
---
### El Farol Model
**55.** What problem does the El Farol model represent?
- A) How to maximize restaurant profits
- B) Coordination under bounded rationality when predictions are self-defeating
- C) How to build the best bar
- D) How traffic lights should be timed
**Answer: B** - El Farol demonstrates bounded rationality and minority games.
---
**56.** Why is there "no perfect strategy" in the El Farol model?
- A) The bar is always too crowded
- B) If everyone uses the same successful prediction, it becomes wrong
- C) Agents cannot make predictions
- D) The model has no strategies
**Answer: B** - Good predictions cause the situation to change, making them self-defeating.
---
**57.** What concept from behavioral economics does El Farol demonstrate?
- A) Perfect rationality
- B) Bounded rationality
- C) Complete information
- D) Infinite resources
**Answer: B** - Agents can't compute optimal solutions, so they use simple heuristics (bounded rationality).
---
**58.** What typically happens to attendance in the El Farol model?
- A) It goes to zero
- B) It goes to 100%
- C) It oscillates around the threshold
- D) It never changes
**Answer: C** - Attendance fluctuates around the threshold (e.g., 60 people).
---
### Disease Spread (SIR)
**59.** What do S, I, and R represent in SIR models?
- A) Size, Intensity, Range
- B) Susceptible, Infected, Recovered
- C) Start, Intermediate, Result
- D) Slow, Immediate, Rapid
**Answer: B** - Susceptible (can catch it), Infected (has it), Recovered (immune).
---
**60.** What is R₀ (basic reproduction number)?
- A) The number of recovered individuals
- B) Average number of people one infected person infects
- C) The recovery rate
- D) Initial population size
**Answer: B** - R₀ is how many people, on average, one sick person infects.
---
**61.** If R₀ < 1, what happens to the disease?
- A) It becomes an epidemic
- B) It dies out
- C) It remains endemic
- D) It spreads globally
**Answer: B** - When R₀ < 1, each person infects less than one other, so disease dies out.
---
**62.** How do network structures affect disease spread?
- A) Networks don't affect spread
- B) Highly connected individuals (hubs) can become super-spreaders
- C) Networks prevent all disease transmission
- D) Networks only affect recovery rates
**Answer: B** - Network structure matters; hubs can dramatically accelerate spread.
---
### Amphora ABM
**63.** What does the Amphora ABM model?
- A) Modern pottery manufacturing
- B) Cultural transmission and trade of pottery styles between ancient civilizations
- C) How amphorae are physically made
- D) Wine production techniques
**Answer: B** - The model studies how cultural practices (pottery styles) spread through trade networks.
---
**64.** What key insight does the Amphora ABM provide about culture?
- A) Culture is completely random
- B) Cultural practices spread through social networks and trade
- C) Culture never changes
- D) Only political leaders affect culture
**Answer: B** - Culture spreads via networks, trade, and success-based imitation.
---
### Dispersal Model
**65.** What trade-off do organisms face in dispersal models?
- A) Size versus speed
- B) Staying (competition with family) versus leaving (travel costs and uncertainty)
- C) Color versus camouflage
- D) Age versus reproduction
**Answer: B** - Dispersal involves trade-offs between local competition and dispersal costs.
---
## Section 7: Creating ABMs (Questions 66-73)
**66.** What is a conceptual model?
- A) Fully coded simulation
- B) Abstract description of entities, behaviors, and interactions (no code yet)
- C) A visualization tool
- D) A type of equation
**Answer: B** - Conceptual model = blueprint before coding.
---
**67.** What is the difference between phenomena-based and exploratory modeling?
- A) There is no difference
- B) Phenomena-based starts with observed patterns to explain; exploratory investigates theoretical possibilities
- C) Phenomena-based uses equations; exploratory uses agents
- D) Phenomena-based ignores data; exploratory requires data
**Answer: B** - Phenomena-based explains known patterns; exploratory asks "what if?"
---
**68.** What is the principle of parsimony in ABM design?
- A) Always add more complexity
- B) Start with the simplest version that could produce the phenomenon
- C) Use all available parameters
- D) Make models as realistic as possible
**Answer: B** - Parsimony = simpler explanations are better; start simple.
---
**69.** When developing a model, what approach combines top-down and bottom-up strategies?
- A) Only theoretical work
- B) Iteratively refining both conceptual framework and code
- C) Random programming
- D) Copying existing models exactly
**Answer: B** - Most successful models combine conceptual planning with iterative coding refinement.
---
**70.** Why should models start simple?
- A) Simple models are always correct
- B) Simpler models are easier to verify and unnecessary complexity should only be added when justified
- C) Complex models don't run
- D) Students can't handle complexity
**Answer: B** - Simple models are easier to verify; add complexity only when needed.
---
**71.** What are the key components to define when building an ABM?
- A) Only the research question
- B) Agent types, behaviors, environment, parameters, time steps, and measures
- C) Just the color scheme
- D) Only the output graphs
**Answer: B** - Complete model design includes agents, behaviors, environment, parameters, timing, and outputs.
---
**72.** What is "pattern-oriented modeling"?
- A) Using patterns as decoration
- B) Validating models against multiple observed patterns
- C) Creating visual patterns only
- D) Ignoring empirical data
**Answer: B** - Pattern-oriented modeling validates against multiple real-world patterns.
---
**73.** Why should parameter choices be treated as "theoretical commitments"?
- A) They don't matter
- B) Because they represent assumptions about how the system works, not just technical details
- C) To make the model run faster
- D) So students can get better grades
**Answer: B** - Parameters embody theoretical assumptions and should be justified.
---
## Section 8: Agent Cognition Types (Questions 74-79)
**74.** What characterizes reactive (reflexive) agents?
- A) They plan ahead and have goals
- B) They follow simple stimulus-response rules with no memory
- C) They optimize utility functions
- D) They learn from experience
**Answer: B** - Reactive agents = simple if-then rules, no memory or planning.
---
**75.** What distinguishes goal-based agents from reactive agents?
- A) Goal-based agents are slower
- B) Goal-based agents have explicit goals and plan actions to achieve them
- C) Goal-based agents have no internal states
- D) Goal-based agents cannot move
**Answer: B** - Goal-based agents plan ahead to achieve objectives.
---
**76.** What are utility-based agents?
- A) Agents that provide utilities (electricity, water)
- B) Agents that optimize a utility function and weigh trade-offs
- C) Agents with no decision-making
- D) Agents that only copy others
**Answer: B** - Utility-based agents choose actions that maximize expected payoff.
---
**77.** What defines learning (adaptive) agents?
- A) They never change behavior
- B) They adapt behavior based on experience and improve over time
- C) They only react to immediate stimuli
- D) They have fixed strategies
**Answer: B** - Learning agents adapt based on past experience.
---
**78.** According to the course, adaptation exists on a spectrum. What does this mean?
- A) All agents are equally adaptive
- B) Even simple rule-followers can be adaptive if their behavior changes with conditions
- C) Only intelligent agents are adaptive
- D) Adaptation requires machine learning
**Answer: B** - Agents don't need learning algorithms to be adaptive; behavior changing with conditions counts.
---
**79.** In comparing Wolf-Sheep and El Farol models, what differs about agent cognition?
- A) Nothing differs
- B) Wolf-Sheep agents are simpler (reactive); El Farol agents use predictive strategies (more complex)
- C) Both use identical cognition
- D) Wolf-Sheep is more cognitively complex
**Answer: B** - Different phenomena require different cognitive complexity in agents.
---
## Section 9: Adaptive Agents (Questions 80-83)
**80.** What is resilience in agent systems?
- A) The ability to spread quickly
- B) The ability to recover from disturbances and return to characteristic dynamics
- C) The speed of agents
- D) The number of agents
**Answer: B** - Resilience = bouncing back after shocks.
---
**81.** What is "subsistence" in the context of adaptive agents?
- A) Living underground
- B) Meeting basic survival needs to maintain viability
- C) Reproducing quickly
- D) Moving to new locations
**Answer: B** - Subsistence = acquiring resources to survive before other activities (like reproducing).
---
**82.** How is a perturbation defined operationally?
- A) A type of agent
- B) Any event that shifts the system away from its characteristic dynamics
- C) A programming error
- D) A visual effect
**Answer: B** - Perturbation = anything shifting the system from its normal pattern.
---
**83.** The instructor describes using entropy curves to quantify what?
- A) Agent intelligence
- B) Resilience—how systems recover after perturbations
- C) Running speed
- D) Color choices
**Answer: B** - Entropy curves help analyze recovery after disturbances.
---
## Section 10: ABM Environments (Questions 84-88)
**84.** What is a toroidal boundary condition?
- A) Agents cannot leave the world
- B) Edges connect (Pac-Man style: go off right → appear on left)
- C) Agents die at the boundary
- D) The world is three-dimensional
**Answer: B** - Toroidal = wrapping; avoids edge effects.
---
**85.** When should network environments be used instead of spatial environments?
- A) When physical location is most important
- B) When "who knows whom" matters more than "who lives near whom"
- C) For all models
- D) Never
**Answer: B** - Networks when connections matter more than spatial proximity.
---
**86.** What is the difference between Moore and von Neumann neighborhoods?
- A) Moore = 4 neighbors; von Neumann = 8 neighbors
- B) Moore = 8 neighbors (with diagonals); von Neumann = 4 neighbors (no diagonals)
- C) They are identical
- D) Moore is for 3D; von Neumann is for 2D
**Answer: B** - Moore = 8 (includes diagonals); von Neumann = 4 (cardinal directions only).
---
**87.** Why might hexagonal grids be preferred over square grids?
- A) They look nicer
- B) All neighbors are equidistant, avoiding directional bias
- C) They are faster to compute
- D) They use less memory
**Answer: B** - Hexagonal grids avoid the diagonal distance problem of square grids.
---
**88.** When would a 3D environment be appropriate?
- A) For all models
- B) When vertical dimension matters (atmosphere, ocean depths, multi-story buildings)
- C) When models need to run faster
- D) Only for visualization purposes
**Answer: B** - 3D when altitude/depth matters (fish swimming at different depths, air pollution).
---
## Section 11: Analyzing ABMs (Questions 89-96)
**89.** Why are multiple runs necessary for ABM analysis?
- A) To waste computer time
- B) Because stochastic models show variability; single runs are not informative
- C) Because one run is too fast
- D) To create more visualizations
**Answer: B** - Stochasticity means each run differs; multiple runs reveal true patterns.
---
**90.** What warning does the instructor give about running simulations until interesting results appear?
- A) It's the best approach
- B) It is the computational equivalent of p-hacking (a questionable research practice)
- C) It saves time
- D) It's encouraged for exploratory work
**Answer: B** - Running until significance is like p-hacking; decide stopping rules before running.
---
**91.** What is sensitivity analysis?
- A) Making agents more sensitive
- B) Identifying which parameters most affect results
- C) Testing emotional responses
- D) Reducing the number of runs
**Answer: B** - Sensitivity analysis shows which parameters the model depends on most.
---
**92.** What is one-at-a-time (OAT) sensitivity analysis?
- A) Testing all parameters simultaneously
- B) Varying one parameter while fixing others
- C) Random sampling of parameters
- D) Testing one run at a time
**Answer: B** - OAT varies one parameter at a time while holding others constant.
---
**93.** What should determine when a simulation stops?
- A) When results look interesting
- B) The research question and criteria like equilibrium or sufficient time horizon
- C) After exactly 100 ticks
- D) When the computer gets tired
**Answer: B** - Stopping should be justified by research question, not convenience.
---
**94.** What is the difference between model-level and agent-level data collection?
- A) There is no difference
- B) Model-level = aggregate (total population); agent-level = individual properties (each agent's location)
- C) Both collect the same data
- D) Model-level is faster
**Answer: B** - Model-level = macro aggregates; agent-level = individual agent data.
---
**95.** What is a phase diagram useful for in ABM analysis?
- A) Showing agent shapes
- B) Plotting two variables against each other to see multi-variable dynamics
- C) Creating legends
- D) Editing code
**Answer: B** - Phase diagrams show relationships between variables (e.g., predator vs prey populations).
---
**96.** Why is data extraction considered part of model design?
- A) It is not related
- B) Because if data extraction isn't planned early, analysis becomes difficult later
- C) It makes models faster
- D) It only matters for visualization
**Answer: B** - Poor planning of data extraction leads to painful analysis later.
---
## Section 12: Validation, Verification, and Replication (Questions 97-100)
**97.** What is verification in ABM?
- A) Checking if the model matches real-world data
- B) Checking if the code correctly implements the conceptual model
- C) Getting other researchers to run your model
- D) Publishing the model
**Answer: B** - Verification = "Did I build what I meant to build?" (code correctness).
---
**98.** What is validation in ABM?
- A) Checking for code bugs
- B) Checking if the model produces realistic outputs and matches empirical data
- C) Making the code run faster
- D) Getting ethics approval
**Answer: B** - Validation = "Does this match reality?" (model accuracy).
---
**99.** What is the difference between replication and reproduction in ABM?
- A) They are identical
- B) Replication = independently building from description; reproduction = running same code
- C) Replication is faster
- D) Reproduction requires new data
**Answer: B** - Replication = recoding from description; reproduction = rerunning original code.
---
**100.** Why is replication important in ABM science?
- A) It wastes researchers' time
- B) It ensures results aren't due to hidden bugs and builds confidence in findings
- C) It makes models more complex
- D) It only matters for students
**Answer: B** - Replication ensures scientific credibility and catches hidden errors.
---
# Answer Key Summary
| Q# | Answer | Q# | Answer | Q# | Answer | Q# | Answer |
|----|--------|-------|--------|-------|--------|-------|--------|
| 1 | B | 26 | B | 51 | C | 76 | B |
| 2 | B | 27 | B | 52 | B | 77 | B |
| 3 | C | 28 | B | 53 | B | 78 | B |
| 4 | B | 29 | B | 54 | C | 79 | B |
| 5 | B | 30 | B | 55 | B | 80 | B |
| 6 | A | 31 | B | 56 | B | 81 | B |
| 7 | B | 32 | B | 57 | B | 82 | B |
| 8 | C | 33 | B | 58 | C | 83 | B |
| 9 | B | 34 | B | 59 | B | 84 | B |
| 10 | B | 35 | B | 60 | B | 85 | B |
| 11 | B | 36 | B | 61 | B | 86 | B |
| 12 | C | 37 | B | 62 | B | 87 | B |
| 13 | B | 38 | B | 63 | B | 88 | B |
| 14 | C | 39 | B | 64 | B | 89 | B |
| 15 | B | 40 | B | 65 | B | 90 | B |
| 16 | B | 41 | B | 66 | B | 91 | B |
| 17 | B | 42 | B | 67 | B | 92 | B |
| 18 | C | 43 | B | 68 | B | 93 | B |
| 19 | B | 44 | B | 69 | B | 94 | B |
| 20 | B | 45 | C | 70 | B | 95 | B |
| 21 | B | 46 | B | 71 | B | 96 | B |
| 22 | B | 47 | C | 72 | B | 97 | B |
| 23 | C | 48 | B | 73 | B | 98 | B |
| 24 | B | 49 | C | 74 | B | 99 | B |
| 25 | B | 50 | B | 75 | B | 100 | B |
---
## Study Tips
Based on lecture emphasis:
1. **Know the specific models deeply** - Fire, DLA, Wolf-Sheep, El Farol, SIR disease models
2. **Understand trade-offs** - ABMs vs equations vs experiments
3. **Focus on analysis concepts** - Why multiple runs, parameter sweeps, sensitivity analysis
4. **Verification vs Validation** - Know the difference clearly
5. **NetLogo interpretation** - Be able to read and understand code
6. **Emergence** - How macro patterns arise from micro rules
7. **Environment choices** - When to use grids vs networks vs continuous space
8. **Cultural Attractors paper** - Understand the key findings
**Good luck with your exam! 🎓**