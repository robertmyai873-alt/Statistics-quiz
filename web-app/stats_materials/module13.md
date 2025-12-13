# Module 13: Growth Curve Models

301. **Growth curve models are a special case of:**
     A. Simple linear regression
     B. Mixed models designed for longitudinal data
     C. ANOVA models
     D. Correlation analysis

302. **The primary purpose of growth curve modeling is to:**
     A. Predict future values only
     B. Model individual trajectories of change over time
     C. Test group differences at one time point
     D. Calculate correlations

303. **In growth curve models, time is typically:**
     A. A categorical variable
     B. A continuous predictor
     C. The dependent variable
     D. Ignored

304. **A linear growth model includes:**
     A. Only an intercept
     B. An intercept and linear time effect
     C. Only quadratic terms
     D. No time component

305. **Random intercepts in growth curve models allow:**
     A. Different starting points for each individual
     B. Different slopes for each individual
     C. Different error variances
     D. No individual differences

306. **Random slopes in growth curve models allow:**
     A. Different starting points only
     B. Different rates of change for each individual
     C. Fixed trajectories for all individuals
     D. No time effects

307. **A quadratic growth model can capture:**
     A. Only linear change
     B. Acceleration or deceleration in change over time
     C. Categorical differences
     D. Cross-sectional relationships

308. **In R, a basic linear growth model is specified as:**
     A. `lmer(outcome ~ 1 + (1|id))`
     B. `lmer(outcome ~ time + (time|id))`
     C. `lm(outcome ~ time)`
     D. `cor(outcome, time)`

309. **The unconditional means model (intercept-only) is:**
     A. `lmer(outcome ~ 1 + (1|id))`
     B. `lmer(outcome ~ time + (1|id))`
     C. `lm(outcome ~ 1)`
     D. `lmer(outcome ~ (time|id))`

310. **Between-person variance refers to:**
     A. Variance within individuals over time
     B. Variance between different individuals
     C. Measurement error
     D. Time-specific variance

311. **Within-person variance refers to:**
     A. Variance between different individuals
     B. Variance within individuals across time points
     C. Population variance
     D. Sample variance

312. **Centering time at baseline means:**
     A. Time starts at 1
     B. Time starts at 0 (first measurement = 0)
     C. Time is always negative
     D. Time is categorical

313. **The intercept in a growth curve model represents:**
     A. The rate of change
     B. The expected value at time = 0
     C. The total variance
     D. The correlation

314. **The slope parameter in a linear growth model represents:**
     A. The starting point
     B. The rate of change per unit time
     C. The total change
     D. The variance

315. **Piecewise growth models are used when:**
     A. Change is constant over time
     B. There are distinct phases with different rates of change
     C. Data is cross-sectional
     D. There are no individual differences

316. **To test whether growth differs between groups, you would:**
     A. Run separate models for each group
     B. Include group × time interactions
     C. Only use fixed effects
     D. Ignore group membership

317. **Missing data in growth curve models:**
     A. Requires listwise deletion
     B. Can be handled under missing at random (MAR) assumptions
     C. Makes the analysis impossible
     D. Must be imputed first

318. **The `summary()` output for a growth curve model shows:**
     A. Fixed effects (intercept, slope)
     B. Random effects variances
     C. Residual variance
     D. All of the above

319. **Autocorrelation in growth curve models refers to:**
     A. Correlation between different people
     B. Correlation between adjacent time points within individuals
     C. Correlation between predictors
     D. Perfect correlation

320. **To model non-linear growth, you might include:**
     A. Only linear time
     B. Polynomial time terms (time², time³)
     C. Categorical time
     D. No time effects

321. **The variance-covariance structure in growth models:**
     A. Is always the same
     B. Can be specified to match the data pattern
     C. Is irrelevant
     D. Only includes diagonal elements

322. **Effect sizes in growth curve models can be expressed as:**
     A. Cohen's d for slope differences
     B. Proportion of variance explained
     C. Confidence intervals for growth parameters
     D. All of the above

323. **Model building in growth curve analysis typically follows:**
     A. Random order of steps
     B. Systematic progression from simple to complex models
     C. Only testing the most complex model
     D. No particular order

324. **Individual growth trajectories can be visualized using:**
     A. Spaghetti plots (individual lines over time)
     B. Bar charts
     C. Pie charts
     D. Only summary statistics

325. **Convergence problems in growth curve models might indicate:**
     A. The model is too simple
     B. The model is overparameterized or data issues
     C. Perfect model fit
     D. No individual differences