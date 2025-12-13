# Module 12: Mixed Models

276. **Mixed models are also known as:**
     A. Multilevel models or hierarchical linear models
     B. Simple linear models
     C. Logistic regression models
     D. Time series models

277. **The main advantage of mixed models is they can handle:**
     A. Only categorical predictors
     B. Non-independent data (clustered/nested structure)
     C. Only continuous outcomes
     D. Small sample sizes only

278. **In R, mixed models are typically fitted using:**
     A. `lm()`
     B. `glm()`
     C. `lmer()` from the lme4 package
     D. `cor()`

279. **Fixed effects in mixed models are:**
     A. Effects that vary randomly across groups
     B. Effects that are constant across all observations
     C. Only categorical variables
     D. Error terms

280. **Random effects in mixed models are:**
     A. Effects that are the same for all groups
     B. Effects that vary across groups/clusters
     C. Only continuous variables
     D. Fixed at zero

281. **A random intercept model allows:**
     A. Different slopes for each group
     B. Different intercepts for each group
     C. Different error variances
     D. Only fixed effects

282. **The syntax `(1|group)` in lmer() specifies:**
     A. A random slope
     B. A random intercept for each group
     C. A fixed effect
     D. An interaction term

283. **A random slope model allows:**
     A. Different intercepts only
     B. Different slopes for each group
     C. No group differences
     D. Only categorical predictors

284. **The syntax `(x|group)` in lmer() specifies:**
     A. A fixed effect of x
     B. A random intercept and random slope for x within groups
     C. An interaction between x and group
     D. A correlation between x and group

285. **The intraclass correlation (ICC) measures:**
     A. The correlation between predictors
     B. The proportion of variance due to clustering
     C. The model fit
     D. The effect size

286. **Mixed models are particularly useful for:**
     A. Cross-sectional data only
     B. Longitudinal data and nested designs
     C. Single-level data
     D. Categorical outcomes only

287. **The `summary()` function for lmer objects provides:**
     A. Fixed effect estimates and their standard errors
     B. Random effect variances
     C. Model fit statistics
     D. All of the above

288. **To test the significance of fixed effects in lmer, you can use:**
     A. The summary() output t-values
     B. The `Anova()` function from the car package
     C. Likelihood ratio tests
     D. All of the above

289. **The degrees of freedom in mixed models are:**
     A. Always n - p
     B. Calculated using approximation methods (e.g., Satterthwaite)
     C. Always equal to the sample size
     D. Not relevant

290. **Random effects are assumed to be:**
     A. Fixed across groups
     B. Normally distributed with mean zero
     C. Correlated with fixed effects
     D. Non-zero

291. **The `ranef()` function extracts:**
     A. Fixed effect estimates
     B. Random effect predictions (BLUPs)
     C. Residuals
     D. Model coefficients

292. **BLUPs stand for:**
     A. Best Linear Unbiased Predictors
     B. Bayesian Linear Uniform Priors
     C. Basic Linear Univariate Procedures
     D. Biased Linear Unreliable Predictors

293. **Crossed random effects occur when:**
     A. Groups are nested within each other
     B. Observations belong to multiple non-nested grouping factors
     C. There are no random effects
     D. Only fixed effects exist

294. **The `confint()` function for mixed models:**
     A. Calculates confidence intervals for parameters
     B. Tests model assumptions
     C. Extracts residuals
     D. Fits the model

295. **Mixed models assume:**
     A. Independence of all observations
     B. Independence within groups but allows dependence between groups
     C. No assumptions about independence
     D. Perfect correlation within groups

296. **To compare nested mixed models, you use:**
     A. t-tests
     B. Likelihood ratio tests with `anova()`
     C. Correlation tests
     D. F-tests only

297. **The `plot()` function for lmer objects helps:**
     A. Create scatterplots of variables
     B. Check model assumptions through residual plots
     C. Display fixed effects only
     D. Show correlation matrices

298. **Marginal R² in mixed models represents variance explained by:**
     A. Random effects only
     B. Fixed effects only
     C. Both fixed and random effects
     D. Residual variance

299. **Conditional R² in mixed models represents variance explained by:**
     A. Fixed effects only
     B. Random effects only
     C. Fixed and random effects combined
     D. Error terms only

300. **The `lmerTest` package provides:**
     A. Additional plotting functions
     B. p-values for fixed effects using approximation methods
     C. Data simulation tools
     D. Model selection criteria