# Module 8: Interactions in Multiple Regression

176. **An interaction effect occurs when:**
     A. Two predictors are highly correlated
     B. The effect of one predictor depends on the level of another predictor
     C. All predictors have the same effect
     D. Predictors are independent

177. **To include an interaction between X₁ and X₂ in R, you use:**
     A. `X1 + X2`
     B. `X1 * X2`
     C. `X1 : X2`
     D. Both B and C are correct

178. **In the model Y = β₀ + β₁X₁ + β₂X₂ + β₃X₁X₂, β₃ represents:**
     A. The main effect of X₁
     B. The main effect of X₂
     C. The interaction effect between X₁ and X₂
     D. The intercept

179. **Simple slopes analysis involves:**
     A. Testing the effect of one predictor at specific levels of another
     B. Removing interaction terms
     C. Standardizing all variables
     D. Calculating correlation coefficients

180. **When an interaction is significant, you should:**
     A. Ignore the main effects
     B. Interpret main effects with caution and focus on the interaction
     C. Remove the interaction term
     D. Only report the interaction

181. **A cross-over interaction occurs when:**
     A. Lines on an interaction plot intersect
     B. Lines are parallel
     C. There is no interaction
     D. All slopes are positive

182. **An ordinal interaction occurs when:**
     A. Lines intersect within the range of data
     B. Lines are parallel but at different levels
     C. Lines do not intersect within the range but would if extended
     D. All lines have the same slope

183. **To probe a significant interaction, you might use:**
     A. Simple slopes analysis
     B. Johnson-Neyman technique
     C. Regions of significance
     D. All of the above

184. **The Johnson-Neyman technique identifies:**
     A. Main effects only
     B. Values of the moderator where the simple slope becomes significant/non-significant
     C. Outliers in the interaction
     D. Correlation strengths

185. **When testing interactions, you should:**
     A. Always center continuous predictors first
     B. Never center variables
     C. Only center categorical variables
     D. Center only the dependent variable

186. **Centering variables before creating interactions helps with:**
     A. Multicollinearity between main effects and interactions
     B. Normality of residuals
     C. Homoscedasticity
     D. Sample size requirements

187. **A three-way interaction involves:**
     A. Two predictors
     B. Three predictors
     C. Three dependent variables
     D. Three samples

188. **Higher-order interactions (three-way, four-way) are:**
     A. Easy to interpret
     B. Often difficult to interpret and less common
     C. Always significant
     D. Required for good model fit

189. **When plotting interactions, the moderator variable is typically:**
     A. On the X-axis
     B. On the Y-axis
     C. Represented by different lines/colors
     D. Not included in the plot

190. **If an interaction plot shows parallel lines, it suggests:**
     A. A strong interaction
     B. No interaction effect
     C. Perfect correlation
     D. Model misspecification

191. **The `emmeans` package in R is used for:**
     A. Calculating means only
     B. Estimated marginal means and simple slopes analysis
     C. Testing normality
     D. Identifying outliers

192. **In hierarchical regression with interactions, you typically enter:**
     A. All terms simultaneously
     B. Main effects first, then interactions
     C. Interactions first, then main effects
     D. Only interaction terms

193. **A significant three-way interaction means:**
     A. All two-way interactions are significant
     B. The two-way interaction between X₁ and X₂ depends on the level of X₃
     C. There are three main effects
     D. The model is overfitted

194. **When interpreting interactions, β₁ in Y = β₀ + β₁X₁ + β₂X₂ + β₃X₁X₂ represents:**
     A. The effect of X₁ when X₂ = 0
     B. The average effect of X₁
     C. The interaction effect
     D. The total effect of X₁

195. **Spotlight analysis involves:**
     A. Examining effects at specific values of the moderator
     B. Removing outliers
     C. Testing all possible interactions
     D. Standardizing variables

196. **The `interactions` package in R provides:**
     A. Basic regression functions
     B. Tools for probing and plotting interactions
     C. Data cleaning functions
     D. Correlation matrices

197. **When testing moderation hypotheses, the moderator:**
     A. Must be categorical
     B. Must be continuous  
     C. Can be either categorical or continuous
     D. Must be normally distributed

198. **A disordinal interaction is the same as:**
     A. Ordinal interaction
     B. Cross-over interaction
     C. No interaction
     D. Linear interaction

199. **Pick-a-point analysis involves:**
     A. Selecting random data points
     B. Testing simple slopes at meaningful values of the moderator
     C. Removing extreme values
     D. Testing all possible combinations

200. **The floodlight analysis (Johnson-Neyman) is superior to pick-a-point because:**
     A. It's easier to compute
     B. It identifies all regions where effects are significant
     C. It requires fewer assumptions
     D. It works with smaller samples