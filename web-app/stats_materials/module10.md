# Module 10: Polynomial Regression

226. **Polynomial regression is used when:**
     A. The relationship between X and Y is linear
     B. The relationship between X and Y is curved/non-linear
     C. Variables are categorical
     D. Sample size is small

227. **A quadratic (second-order) polynomial includes:**
     A. Only X
     B. X and X²
     C. X, X², and X³
     D. Only X²

228. **In R, to add a quadratic term, you use:**
     A. `X^2`
     B. `I(X^2)`
     C. `poly(X, 2)`
     D. Both B and C are correct

229. **The `poly()` function in R creates:**
     A. Raw polynomials only
     B. Orthogonal polynomials by default
     C. Categorical variables
     D. Interaction terms

230. **Orthogonal polynomials are preferred because they:**
     A. Are easier to interpret
     B. Reduce multicollinearity between polynomial terms
     C. Always give significant results
     D. Work only with large samples

231. **A cubic polynomial includes terms up to:**
     A. X²
     B. X³
     C. X⁴
     D. X⁵

232. **The linear term in a polynomial regression represents:**
     A. The overall slope
     B. The rate of change at the mean of X
     C. The intercept
     D. The curvature

233. **The quadratic term (X²) represents:**
     A. The linear relationship
     B. The curvature or bend in the relationship
     C. The intercept
     D. The interaction effect

234. **When adding polynomial terms, you should generally:**
     A. Include all lower-order terms
     B. Only include the highest-order term
     C. Skip the linear term
     D. Center the variables

235. **A significant quadratic term suggests:**
     A. A linear relationship
     B. A curved relationship (parabolic)
     C. No relationship
     D. Multiple outcomes

236. **To determine the optimal degree of polynomial, you can use:**
     A. Visual inspection of plots
     B. Model comparison techniques (AIC, BIC)
     C. Significance testing of polynomial terms
     D. All of the above

237. **Raw polynomials (X, X², X³) often suffer from:**
     A. Low correlation
     B. High multicollinearity
     C. Poor model fit
     D. Missing data

238. **The `I()` function in R formulas:**
     A. Calculates interactions
     B. Treats operations arithmetically (as-is)
     C. Creates factors
     D. Tests significance

239. **A quartic polynomial includes:**
     A. X and X²
     B. X, X², and X³
     C. X, X², X³, and X⁴
     D. Only X⁴

240. **Overfitting in polynomial regression occurs when:**
     A. You use too low a degree
     B. You use too high a degree relative to sample size
     C. Variables are centered
     D. The relationship is linear

241. **The turning point(s) of a quadratic function Y = a + bX + cX² occur at:**
     A. X = 0
     B. X = -b/(2c)
     C. X = c/b
     D. X = a/b

242. **When reporting polynomial regression results, you should include:**
     A. Only the highest-order term
     B. All polynomial terms and their significance
     C. Only significant terms
     D. Raw correlations only

243. **Centering X before creating polynomials helps with:**
     A. Interpretation of lower-order terms
     B. Reducing multicollinearity
     C. Model convergence
     D. All of the above

244. **A positive quadratic coefficient (c > 0) creates:**
     A. An upward-opening parabola (U-shape)
     B. A downward-opening parabola (∩-shape)
     C. A straight line
     D. An S-curve

245. **Polynomial regression assumes:**
     A. The true relationship is polynomial
     B. The relationship can be approximated by a polynomial
     C. All variables are categorical
     D. Sample sizes are equal

246. **Cross-validation is particularly important in polynomial regression to:**
     A. Test assumptions
     B. Assess generalizability and avoid overfitting
     C. Calculate coefficients
     D. Handle missing data

247. **The adjusted R² is important in polynomial regression because it:**
     A. Always increases with more terms
     B. Penalizes for additional terms and helps prevent overfitting
     C. Tests significance
     D. Measures correlation

248. **Spline regression is an alternative to polynomial regression that:**
     A. Uses only linear terms
     B. Fits piecewise polynomials with smooth connections
     C. Requires categorical predictors
     D. Works only with small samples

249. **Higher-order polynomials (degree > 3) are:**
     A. Always recommended
     B. Often difficult to interpret and may overfit
     C. Required for curved relationships
     D. Only used with large samples

250. **The residual plots in polynomial regression should show:**
     A. Clear patterns
     B. Random scatter if the model is appropriate
     C. Increasing variance
     D. Linear trends