# Module 11: Model Comparison

251. **AIC stands for:**
     A. Akaike Information Criterion
     B. Average Information Content
     C. Adjusted Information Criterion
     D. Automatic Information Calculator

252. **In model comparison using AIC, you prefer models with:**
     A. Higher AIC values
     B. Lower AIC values
     C. AIC values close to zero
     D. AIC values equal to the sample size

253. **The AIC formula includes a penalty for:**
     A. Sample size
     B. Number of parameters
     C. Model complexity
     D. Both B and C

254. **BIC (Bayesian Information Criterion) differs from AIC in that it:**
     A. Doesn't penalize for parameters
     B. Penalizes model complexity more heavily
     C. Is always smaller than AIC
     D. Can only be used with Bayesian models

255. **A difference in AIC of 2 points suggests:**
     A. No meaningful difference between models
     B. Weak evidence for the model with lower AIC
     C. Strong evidence for the model with lower AIC
     D. The models are identical

256. **Log-likelihood measures:**
     A. The probability of the data given the model
     B. The correlation between variables
     C. The effect size
     D. The sample size

257. **The likelihood ratio test compares:**
     A. Two completely different models
     B. Nested models (one is a subset of the other)
     C. Models with different sample sizes
     D. Only linear models

258. **In R, the `anova()` function can be used to:**
     A. Compare nested models using likelihood ratio test
     B. Test normality
     C. Calculate correlations
     D. Check assumptions

259. **Deviance is:**
     A. A measure of model misfit
     B. -2 × log-likelihood
     C. Used in likelihood ratio tests
     D. All of the above

260. **When comparing models, a significant χ² test suggests:**
     A. The simpler model is better
     B. The more complex model is significantly better
     C. Both models are equivalent
     D. The test is invalid

261. **Cross-validation evaluates models based on:**
     A. Fit to the same data used to build the model
     B. Fit to new, unseen data
     C. Number of parameters only
     D. Theoretical considerations

262. **k-fold cross-validation involves:**
     A. Splitting data into k subsets for training/testing
     B. Using k different models
     C. Testing k parameters
     D. Running k separate studies

263. **Leave-one-out cross-validation (LOOCV) is:**
     A. k-fold CV where k = 2
     B. k-fold CV where k = n (sample size)
     C. A different method entirely
     D. Only used for small samples

264. **Adjusted R² is preferred over R² for model comparison because it:**
     A. Is always higher
     B. Accounts for the number of predictors
     C. Is easier to calculate
     D. Works with categorical variables

265. **Overfitting occurs when a model:**
     A. Fits the training data well but generalizes poorly
     B. Has too few parameters
     C. Explains no variance
     D. Has perfect fit

266. **Underfitting occurs when a model:**
     A. Is too complex
     B. Is too simple and misses important patterns
     C. Has perfect fit
     D. Uses too many predictors

267. **The principle of parsimony suggests:**
     A. Always use the most complex model
     B. Prefer simpler models when performance is similar
     C. Only use one predictor
     D. Ignore model fit

268. **Nested models are:**
     A. Models where one is a special case of the other
     B. Completely different models
     C. Models with the same number of parameters
     D. Models using different datasets

269. **The F-test for model comparison can be used when:**
     A. Comparing any two models
     B. Comparing nested linear models
     C. Models have different sample sizes
     D. Variables are categorical

270. **When models are not nested, you should use:**
     A. Likelihood ratio test
     B. F-test
     C. Information criteria (AIC, BIC)
     D. t-test

271. **The `step()` function in R performs:**
     A. Stepwise model selection
     B. Model validation
     C. Cross-validation
     D. Assumption testing

272. **Forward selection involves:**
     A. Starting with all variables and removing them
     B. Starting with no variables and adding them
     C. Testing all possible combinations
     D. Random selection

273. **Backward elimination involves:**
     A. Starting with no variables and adding them
     B. Starting with all variables and removing non-significant ones
     C. Testing interactions only
     D. Using only categorical predictors

274. **The problem with stepwise selection is:**
     A. It always finds the best model
     B. It can be influenced by multicollinearity and may not find the optimal model
     C. It only works with linear models
     D. It requires large samples

275. **Model averaging involves:**
     A. Taking the mean of all variables
     B. Combining predictions from multiple models
     C. Using only the best model
     D. Averaging the residuals