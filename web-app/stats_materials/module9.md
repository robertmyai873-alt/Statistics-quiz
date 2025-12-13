# Module 9: Categorical Variables & Coding

201. **Dummy coding uses _____ to represent categorical variables:**
     A. Text labels
     B. 0s and 1s
     C. Decimal numbers
     D. Negative numbers

202. **For a categorical variable with 4 levels, you need _____ dummy variables:**
     A. 4
     B. 3
     C. 2
     D. 1

203. **In dummy coding, the reference group is coded as:**
     A. 1 across all dummy variables
     B. 0 across all dummy variables
     C. -1 across all dummy variables
     D. Missing values

204. **The intercept in dummy coding represents:**
     A. The grand mean
     B. The mean of the reference group
     C. The mean of the treatment groups
     D. The difference between groups

205. **Effect coding (unweighted) uses _____ to represent the reference group:**
     A. 0
     B. 1
     C. -1
     D. Missing

206. **In effect coding, the intercept represents:**
     A. The reference group mean
     B. The unweighted grand mean
     C. The treatment group mean
     D. Zero

207. **Contrast coding allows you to:**
     A. Test specific hypotheses about group differences
     B. Only compare adjacent groups
     C. Test normality
     D. Remove outliers

208. **When using dummy coding, the coefficient for a dummy variable represents:**
     A. The mean of that group
     B. The difference between that group and the reference group
     C. The correlation with the outcome
     D. The variance of that group

209. **Weighted effect coding is used when:**
     A. Groups have equal sample sizes
     B. Groups have unequal sample sizes and you want the grand mean
     C. You want to test specific contrasts
     D. Variables are continuous

210. **The `contrasts()` function in R is used to:**
     A. Calculate correlations
     B. Set up coding schemes for categorical variables
     C. Test interactions
     D. Check assumptions

211. **Helmert coding compares:**
     A. Each group to the reference group
     B. Each group to the mean of subsequent groups
     C. Adjacent groups only
     D. All groups to the grand mean

212. **Polynomial coding is appropriate when:**
     A. Variables are categorical
     B. The categorical variable represents ordered levels
     C. Sample sizes are small
     D. Interactions are present

213. **The choice of coding scheme affects:**
     A. The intercept and coefficient interpretations
     B. The overall model fit (R²)
     C. The significance of the model
     D. Both A and B

214. **When comparing three treatment groups to a control, use:**
     A. Effect coding
     B. Dummy coding with control as reference
     C. Contrast coding
     D. Polynomial coding

215. **In a 2×2 factorial design, you need _____ terms to represent all effects:**
     A. 2
     B. 3
     C. 4
     D. 1

216. **The `model.matrix()` function in R:**
     A. Creates correlation matrices
     B. Shows the design matrix with coding
     C. Tests model assumptions
     D. Calculates residuals

217. **Orthogonal contrasts are:**
     A. Correlated with each other
     B. Independent and sum to zero
     C. Only used for dummy coding
     D. Required for all analyses

218. **When using effect coding with 3 groups, the sum of coefficients:**
     A. Equals 1
     B. Equals 0
     C. Equals the grand mean
     D. Is undefined

219. **Planned contrasts are:**
     A. Decided after seeing the data
     B. Specified before data collection based on theory
     C. Random comparisons
     D. Always orthogonal

220. **The `emmeans` package helps with:**
     A. Setting up contrasts
     B. Computing estimated marginal means for different groups
     C. Testing normality
     D. Removing outliers

221. **Post-hoc tests are appropriate when:**
     A. You have specific hypotheses
     B. You want to explore all possible group differences
     C. Sample sizes are small
     D. Variables are continuous

222. **Bonferroni correction is used to:**
     A. Correct for multiple comparisons
     B. Improve model fit
     C. Test interactions
     D. Handle missing data

223. **In repeated contrasts coding:**
     A. Each level is compared to the previous level
     B. Each level is compared to the reference
     C. All levels are compared to the grand mean
     D. Only adjacent levels are compared

224. **The interpretation of coefficients changes when you:**
     A. Change the coding scheme
     B. Add more variables
     C. Transform the outcome
     D. All of the above

225. **Simple coding is another name for:**
     A. Effect coding
     B. Dummy coding
     C. Contrast coding
     D. Polynomial coding