# Statistics for CSAI II – Detailed Concept Explanations

## Multiple Linear Regression (Continued)

### Assumptions of Multiple Regression (All Forms)

Multiple regression relies on several key assumptions that must be met for the results to be valid and reliable:

**1. Linearity**: The relationship between predictors and the outcome variable must be linear. This means the effect of each predictor on the outcome should be constant across all values of that predictor.

**2. Independence of Errors**: The residuals (errors) should be independent of each other. This is particularly important in time-series data or hierarchical data where observations might be related.

**3. Homoscedasticity**: The variance of residuals should be constant across all levels of the predicted values. In other words, the spread of residuals should be roughly the same whether you're looking at low or high predicted values.

**4. Normality of Residuals**: The residuals should be approximately normally distributed. This assumption is particularly important for making inferences about the regression coefficients and for constructing confidence intervals.

**5. No Perfect Multicollinearity**: Predictor variables should not be perfectly correlated with each other. High multicollinearity can make it difficult to determine the individual effect of each predictor and can inflate standard errors.

**6. No Endogeneity**: The predictor variables should be uncorrelated with the error term. This means there should be no omitted variable bias or measurement error that creates spurious relationships.

---

### How to Check Multiple Regression Assumptions

Each assumption requires specific diagnostic checks:

**Checking Linearity**:
- Create residual plots (residuals vs. fitted values)
- Look for random scatter around zero; patterns suggest non-linearity
- Create partial regression plots for each predictor
- Use component-residual plots (CR plots)

**Checking Independence**:
- Use the Durbin-Watson test for autocorrelation
- Examine the design of your study (are observations truly independent?)
- Plot residuals against time or observation order

**Checking Homoscedasticity**:
- Plot residuals vs. fitted values; look for funnel or cone shapes
- Use the Breusch-Pagan test or the non-constant variance test
- Create scale-location plots (sqrt of standardized residuals vs. fitted values)

**Checking Normality of Residuals**:
- Create Q-Q (quantile-quantile) plots of residuals
- Use the Shapiro-Wilk test for normality
- Examine histograms of residuals
- Note: This assumption is less critical with large sample sizes due to the Central Limit Theorem

**Checking Multicollinearity**:
- Calculate Variance Inflation Factors (VIF) for each predictor
- VIF > 10 indicates problematic multicollinearity
- Examine correlation matrices of predictors
- Check tolerance values (1/VIF); values < 0.1 suggest problems

**Checking for Influential Points**:
- Calculate Cook's distance for each observation
- Examine leverage values (hat values)
- Look at DFBETAS and DFFITS

---

### How to Interpret Whether Assumptions Are Met or Not

**Linearity**:
- **Met**: Residual plot shows random scatter with no clear pattern; points distributed equally above and below zero
- **Violated**: Residual plot shows a curved pattern, U-shape, or systematic structure
- **Action if violated**: Consider transforming variables, adding polynomial terms, or using non-linear models

**Independence**:
- **Met**: Durbin-Watson statistic close to 2 (typically 1.5-2.5); no pattern in residuals over time
- **Violated**: Durbin-Watson far from 2; clear patterns in residuals when plotted sequentially
- **Action if violated**: Use time-series methods, mixed models, or account for clustering

**Homoscedasticity**:
- **Met**: Residual plot shows consistent spread across all fitted values; funnel shape absent
- **Violated**: Residual plot shows increasing or decreasing spread (funnel/cone shape)
- **Action if violated**: Transform the outcome variable (log, sqrt), use weighted least squares, or use robust standard errors

**Normality**:
- **Met**: Q-Q plot shows points falling approximately on the diagonal line; histogram roughly bell-shaped
- **Violated**: Q-Q plot shows systematic departures from the line; histogram shows skewness or heavy tails
- **Action if violated**: With large samples, mild violations are often acceptable; otherwise, transform variables or use bootstrapping

**Multicollinearity**:
- **Met**: VIF values < 5 (conservative) or < 10 (liberal); tolerance > 0.2
- **Violated**: VIF values > 10; tolerance < 0.1; unstable coefficient estimates
- **Action if violated**: Remove redundant predictors, combine correlated predictors, use ridge regression, or collect more data

---

### Marginal R² and Conditional R²

These concepts are particularly relevant for mixed-effects models:

**Marginal R² (R²m)**:
- Represents the proportion of variance explained by the fixed effects alone
- Answers: "How much variance do my predictors of interest explain?"
- Does not include the contribution of random effects
- Useful for understanding the explanatory power of your theoretical variables
- Calculated using only fixed effects predictions

**Conditional R² (R²c)**:
- Represents the proportion of variance explained by both fixed and random effects combined
- Answers: "How much total variance does my entire model explain?"
- Includes the contribution of random intercepts and random slopes
- Always equal to or greater than marginal R²
- Useful for understanding the total model fit

**Relationship Between Them**:
- The difference (R²c - R²m) tells you how much variance is explained by the random effects
- A large difference suggests substantial clustering or individual-level variation
- If R²c is much larger than R²m, the random effects are accounting for meaningful variation

**Interpretation Example**:
- If R²m = 0.25 and R²c = 0.60:
  - Fixed effects explain 25% of variance
  - Random effects explain an additional 35% of variance
  - Total model explains 60% of variance
  - This suggests strong individual differences or clustering effects

---

## Outliers

### Methods for Detecting Outliers

Outliers are observations that deviate substantially from the overall pattern of the data. Multiple methods exist for detection:

**1. Statistical Distance Methods**:

**Z-scores (Standardized Values)**:
- Calculate how many standard deviations an observation is from the mean
- Rule of thumb: |z| > 3 indicates a potential outlier
- Works well for univariate outlier detection
- Assumes approximately normal distribution

**IQR Method (Interquartile Range)**:
- Calculate Q1 (25th percentile) and Q3 (75th percentile)
- IQR = Q3 - Q1
- Outliers are values below Q1 - 1.5×IQR or above Q3 + 1.5×IQR
- More robust to non-normal distributions than z-scores

**2. Regression-Specific Methods**:

**Studentized Residuals**:
- Standardized residuals that account for leverage
- Values beyond ±3 suggest outliers
- More reliable than simple residuals for detecting unusual observations

**Cook's Distance**:
- Measures the influence of each observation on the regression coefficients
- Values > 4/n (where n is sample size) or > 1 indicate influential points
- Combines information about residuals and leverage

**Leverage (Hat Values)**:
- Measures how far an observation's predictor values are from the mean
- High leverage points have unusual predictor combinations
- Threshold: 2(k+1)/n or 3(k+1)/n, where k is the number of predictors

**DFFITS and DFBETAS**:
- DFFITS: measures influence on fitted values
- DFBETAS: measures influence on individual regression coefficients
- Larger absolute values indicate more influential observations

**3. Visual Methods**:

**Boxplots**:
- Display the distribution and identify points beyond the whiskers
- Easy to implement and interpret
- Good for quick initial screening

**Scatterplots**:
- Visual inspection for bivariate relationships
- Can reveal outliers that don't follow the general trend

**Residual Plots**:
- Plot residuals vs. fitted values or predictors
- Outliers appear as points far from the main cluster

**4. Multivariate Methods**:

**Mahalanobis Distance**:
- Measures distance from the centroid in multidimensional space
- Accounts for correlations between variables
- Chi-square distribution can be used to determine significance
- Particularly useful when multiple predictors are involved

---

### Dealing with Outliers in an Analysis

Once outliers are detected, several approaches can be taken:

**1. Investigation First**:
- Always investigate before removing
- Check for data entry errors or measurement mistakes
- Determine if the outlier represents a real phenomenon or an error
- Consider whether the outlier belongs to the population of interest

**2. Retention Strategies**:

**Keep the Outlier**:
- When: The outlier is a legitimate observation from your population
- Why: Removing valid data reduces generalizability
- Consideration: Report results with and without the outlier to show robustness

**Report Multiple Analyses**:
- Conduct analysis with outliers included
- Conduct analysis with outliers excluded
- Compare results and discuss any differences
- This transparency helps readers assess the impact of outliers

**3. Statistical Adjustments**:

**Robust Regression Methods**:
- Use methods less sensitive to outliers (e.g., robust standard errors)
- M-estimators, quantile regression, or rank-based methods
- Reduces influence of extreme values without deletion

**Transformation**:
- Apply transformations (log, square root) to reduce the impact of extreme values
- Can make distributions more normal and reduce outlier influence
- Must be theoretically justified and applied to all data

**Winsorizing**:
- Replace extreme values with less extreme values (e.g., 95th percentile)
- Reduces influence while retaining all cases
- Maintains sample size

**4. Removal (Use Cautiously)**:

**When Removal is Justified**:
- Clear data entry error confirmed
- Measurement error or equipment malfunction
- Observation doesn't belong to the target population
- After sensitivity analysis shows substantive impact

**When Removal is Not Justified**:
- Simply because it changes your results in a desired direction
- Without investigation or justification
- If it represents genuine variability in your population

**5. Documentation**:
- Always document your outlier treatment decisions
- Report how many outliers were detected
- Explain your rationale for how they were handled
- Provide sensitivity analyses when appropriate
- Be transparent about the impact on your conclusions

**6. Context-Specific Considerations**:

**Small Samples**:
- Single outliers can have substantial impact
- Be especially cautious and thorough in investigation
- Consider robust methods rather than deletion

**Large Samples**:
- Individual outliers may have minimal impact on results
- Multiple outliers might suggest model misspecification
- Focus on patterns rather than individual cases

**Theoretical Considerations**:
- Some fields expect outliers (e.g., income data, reaction times)
- Consider whether extreme values are theoretically interesting
- Domain knowledge should guide decisions

---

## Interactions in Multiple Regression

### How to Include Interactions

An interaction occurs when the effect of one predictor on the outcome depends on the level of another predictor.

**Basic Syntax in R**:
```
# Method 1: Using the colon operator
model <- lm(Y ~ X1 + X2 + X1:X2, data = mydata)

# Method 2: Using the asterisk operator (includes main effects automatically)
model <- lm(Y ~ X1 * X2, data = mydata)
# This expands to: Y ~ X1 + X2 + X1:X2
```

**Types of Interactions**:

**Continuous × Continuous**:
- Both predictors are continuous variables
- The interaction term is the product of the two variables
- Example: `lm(salary ~ experience * education)`

**Categorical × Continuous**:
- One categorical, one continuous predictor
- Tests whether the slope of the continuous predictor differs across groups
- Example: `lm(performance ~ training * hours_studied)`

**Categorical × Categorical**:
- Both predictors are categorical
- Tests whether the effect of one factor depends on levels of another factor
- Example: `lm(score ~ treatment * gender)`

**Higher-Order Interactions**:
- Three-way or more complex interactions
- Example: `lm(Y ~ X1 * X2 * X3)`
- Interpretation becomes increasingly complex

**Centering Variables**:
- Often recommended to center continuous variables before creating interactions
- Reduces multicollinearity between main effects and interaction terms
- Makes the intercept more interpretable (represents the mean, not zero)
```
mydata$X1_centered <- scale(mydata$X1, center = TRUE, scale = FALSE)
mydata$X2_centered <- scale(mydata$X2, center = TRUE, scale = FALSE)
model <- lm(Y ~ X1_centered * X2_centered, data = mydata)
```

---

### How to Interpret Interactions

Interactions change how we interpret all coefficients in the model:

**General Principles**:
- When an interaction is present, you cannot interpret main effects in isolation
- Main effects represent "conditional" effects when the other variable is zero
- The interaction coefficient tells you how the effect of one variable changes as the other variable increases

**Continuous × Continuous Interaction**:

Model: `Y = b₀ + b₁X₁ + b₂X₂ + b₃(X₁×X₂)`

- b₁: Effect of X₁ when X₂ = 0
- b₂: Effect of X₂ when X₁ = 0
- b₃: How much the effect of X₁ changes for each one-unit increase in X₂
- Or equivalently: How much the effect of X₂ changes for each one-unit increase in X₁

**Example**: 
```
Salary = 30000 + 2000(Experience) + 1500(Education) + 300(Experience × Education)
```
- When Education = 0: Salary increases by 2000 per year of Experience
- When Education = 5: Salary increases by 2000 + 300(5) = 3500 per year of Experience
- The positive interaction means Experience matters more for highly educated individuals

**Categorical × Continuous Interaction**:

Model with binary categorical variable (0/1):
`Y = b₀ + b₁X₁ + b₂Group + b₃(X₁×Group)`

- b₀: Intercept for reference group (Group = 0)
- b₁: Slope of X₁ for reference group
- b₂: Difference in intercepts between groups when X₁ = 0
- b₃: Difference in slopes between groups

**Example**:
```
Score = 50 + 5(Hours) + 10(Treatment) + 3(Hours × Treatment)
```
- Control group (Treatment = 0): Score = 50 + 5(Hours)
- Treatment group (Treatment = 1): Score = 60 + 8(Hours)
- The treatment group has both a higher starting point and steeper slope

**Statistical Significance**:
- A significant interaction term (b₃) means the relationship between X₁ and Y truly depends on X₂
- Even if main effects are non-significant, a significant interaction is meaningful
- If the interaction is non-significant, it may be appropriate to remove it and interpret main effects

---

### How to Investigate Interactions (e.g., Simple Slopes)

When an interaction is significant, further probing is necessary to understand it:

**1. Simple Slopes Analysis**:

Simple slopes examine the effect of one predictor at specific values of the moderator.

**For Continuous Moderators**:
- Typically test at: Mean, Mean ± 1 SD
- Sometimes use: 10th, 50th, 90th percentiles
- Or: theoretically meaningful values

**In R using the `interactions` package**:
```
library(interactions)
sim_slopes(model, pred = X1, modx = X2, johnson_neyman = FALSE)
```

**Manual Calculation**:
For model: `Y = b₀ + b₁X₁ + b₂X₂ + b₃(X₁×X₂)`

Simple slope of X₁ at X₂ = c is: b₁ + b₃(c)

Standard error: √[SE²(b₁) + c²SE²(b₃) + 2c·Cov(b₁,b₃)]

**2. Johnson-Neyman Technique**:

Identifies the exact range of the moderator where the simple slope is significant.

```
sim_slopes(model, pred = X1, modx = X2, johnson_neyman = TRUE)
```

Output tells you:
- At what values of X₂ the effect of X₁ becomes significant
- Regions of significance for the simple slope
- More informative than testing at arbitrary values

**3. Visualization**:

**Interaction Plots**:
```
library(interactions)
interact_plot(model, pred = X1, modx = X2, interval = TRUE)
```

Shows:
- Separate regression lines at different levels of the moderator
- Confidence bands around each line
- How the relationship changes across moderator values

**For Categorical × Continuous**:
- Plot separate lines for each category
- Non-parallel lines indicate interaction

**For Continuous × Continuous**:
- Plot lines at low (−1 SD), medium (mean), and high (+1 SD) values of moderator
- Can also create 3D surface plots

**4. Regions of Significance (RoS)**:

Uses Johnson-Neyman output to identify:
- Where the effect transitions from non-significant to significant
- The specific moderator values that define these boundaries
- Allows for more nuanced interpretation than simple slopes alone

**5. Pick-a-Point Approach**:

Select specific, meaningful values of the moderator:
- Theoretically important values
- Clinically relevant cutoffs
- Practical decision points

Calculate and report:
- Simple slope at each value
- Statistical significance of each simple slope
- Confidence intervals for each simple slope

**6. Reporting Interaction Results**:

Include:
- Significance test of the interaction term
- Description of the nature of the interaction
- Simple slopes at key values with significance tests
- Visualization of the interaction
- Effect sizes at different moderator levels

**Example Interpretation**:
"The interaction between study hours and test anxiety was significant (b = -0.15, p = .003), indicating that the positive effect of study hours on test performance was weaker for students with high anxiety. Simple slopes analysis revealed that for students with low anxiety (−1 SD), each additional hour of study predicted a 5.2-point increase in test score (p < .001), whereas for students with high anxiety (+1 SD), each hour predicted only a 2.2-point increase (p = .04)."

---

## Categorical Variables & Coding

### Dummy Coding

Dummy coding is the most common method for including categorical variables in regression.

**How It Works**:
- Choose one category as the reference group (coded as 0 on all dummy variables)
- Create k−1 dummy variables for a categorical variable with k categories
- Each dummy variable compares one category to the reference group

**Example with 3 Categories** (e.g., Treatment: Control, Drug A, Drug B):

| Group    | D1 (Drug A) | D2 (Drug B) |
|----------|-------------|-------------|
| Control  | 0           | 0           |
| Drug A   | 1           | 0           |
| Drug B   | 0           | 1           |

**Regression Model**:
`Y = b₀ + b₁D₁ + b₂D₂`

**Coefficient Interpretation**:
- **b₀ (Intercept)**: Mean of the reference group (Control)
- **b₁**: Difference between Drug A and Control (Drug A mean − Control mean)
- **b₂**: Difference between Drug B and Control (Drug B mean − Control mean)

**When to Use**:
- When you have a clear, meaningful reference group
- When you want to compare all groups to one specific group
- Most common in experimental designs with a control condition

**In R**:
R automatically creates dummy codes when you include a factor variable:
```
model <- lm(Y ~ Treatment, data = mydata)
# First level alphabetically becomes reference by default

# To specify reference group:
mydata$Treatment <- relevel(mydata$Treatment, ref = "Control")
model <- lm(Y ~ Treatment, data = mydata)
```

---

### Unweighted/Weighted Coding

Also known as effect coding or deviation coding.

**Unweighted Effect Coding**:

**How It Works**:
- The reference group is coded as −1 on all effect-coded variables
- Other groups are coded similarly to dummy coding
- Compares each group to the grand mean (mean of all groups)

**Example with 3 Categories**:

| Group    | E1  | E2  |
|----------|-----|-----|
| Control  | -1  | -1  |
| Drug A   | 1   | 0   |
| Drug B   | 0   | 1   |

**Regression Model**:
`Y = b₀ + b₁E₁ + b₂E₂`

**Coefficient Interpretation**:
- **b₀ (Intercept)**: Grand mean (average across all groups)
- **b₁**: Deviation of Drug A from the grand mean
- **b₂**: Deviation of Drug B from the grand mean
- Effect of reference group can be calculated: −(b₁ + b₂)

**Weighted Effect Coding**:

Used when groups have unequal sample sizes and you want to weight by sample size.

Coefficients represent:
- Deviations from the weighted grand mean
- More representative when groups are naturally unequal

**When to Use**:
- When no group is a natural reference
- When you want to compare each group to the overall average
- In factorial designs to test main effects
- ANOVA-style comparisons

**In R**:
```
# Unweighted effect coding
contrasts(mydata$Treatment) <- contr.sum(3)
model <- lm(Y ~ Treatment, data = mydata)

# Weighted effect coding requires manual specification
```

---

### Contrast Coding

Contrast coding allows you to test specific, planned comparisons among groups.

**How It Works**:
- Create custom codes that test specific hypotheses
- Each contrast represents a specific comparison of interest
- Contrasts must be orthogonal (independent) for proper interpretation

**Orthogonality Rules**:
- The sum of weights for each contrast should equal zero
- The sum of the cross-products of weights across contrasts should equal zero
- Ensures contrasts are testing independent questions

**Example with 4 Groups** (Control, Low Dose, Medium Dose, High Dose):

**Contrast 1**: Control vs. All Drug Groups
**Contrast 2**: Low Dose vs. Medium & High Doses
**Contrast 3**: Medium Dose vs. High Dose

| Group        | C1  | C2  | C3  |
|--------------|-----|-----|-----|
| Control      | -3  | 0   | 0   |
| Low Dose     | 1   | -2  | 0   |
| Medium Dose  | 1   | 1   | -1  |
| High Dose    | 1   | 1   | 1   |

**Check Orthogonality**:
- Each column sums to 0 ✓
- C1 × C2: (−3)(0) + (1)(−2) + (1)(1) + (1)(1) = 0 ✓
- C1 × C3: (−3)(0) + (1)(0) + (1)(−1) + (1)(1) = 0 ✓
- C2 × C3: (0)(0) + (−2)(0) + (1)(−1) + (1)(1) = 0 ✓

**Coefficient Interpretation**:
- Each b coefficient tests the specific contrast
- Significance indicates whether that comparison is meaningful
- Effect size reflects the magnitude of the difference

**Common Contrast Types**:

**Helmert Contrasts**:
- Compare each level to the mean of subsequent levels
- Useful for ordered categories

**Reverse Helmert Contrasts**:
- Compare each level to the mean of previous levels

**Polynomial Contrasts**:
- Test for linear, quadratic, cubic trends
- Useful when categories represent ordered levels (e.g., doses)

**When to Use**:
- When you have specific a priori hypotheses
- When standard dummy or effect coding doesn't address your research question
- In complex experimental designs with planned comparisons

**In R**:
```
# Create custom contrast matrix
my_contrasts <- matrix(c(-3, 1, 1, 1,
                         0, -2, 1, 1,
                         0, 0, -1, 1), ncol = 3)
contrasts(mydata$Treatment) <- my_contrasts
model <- lm(Y ~ Treatment, data = mydata)

# Polynomial contrasts
contrasts(mydata$Dose) <- contr.poly(4)
```

---

### Interpreting Intercepts with Different Coding Types

The intercept meaning changes dramatically based on coding scheme:

**Dummy Coding**:
- **Intercept = Mean of the reference group**
- Example: If Control is reference, b₀ is the average outcome for Control participants
- Most intuitive when you have a baseline or control condition

**Effect Coding (Unweighted)**:
- **Intercept = Grand mean across all groups**
- Example: b₀ is the average outcome across Control, Drug A, and Drug B
- Useful for understanding overall performance

**Effect Coding (Weighted)**:
- **Intercept = Weighted grand mean**
- Takes into account different group sizes
- More representative of the overall population

**Contrast Coding**:
- **Intercept = Grand mean** (if contrasts are properly centered)
- Interpretation depends on how contrasts are constructed
- Represents the overall average when contrasts sum to zero

**Practical Implications**:
- The intercept in dummy coding is often more immediately interpretable
- Effect coding intercepts are useful for reporting overall effects
- Contrast coding intercepts require careful construction to be meaningful
- Always report which coding scheme you used

---

### Interpreting Coefficients with Different Coding Types

**Dummy Coding**:
- **Each coefficient = Difference from reference group**
- b₁ tests: Is Group 1 different from Reference?
- b₂ tests: Is Group 2 different from Reference?
- Does NOT directly test whether Group 1 differs from Group 2

**Effect Coding**:
- **Each coefficient = Deviation from grand mean**
- b₁ tests: Is Group 1 different from the overall average?
- b₂ tests: Is Group 2 different from the overall average?
- To get reference group effect: −(b₁ + b₂ + ... + bₖ₋₁)

**Contrast Coding**:
- **Each coefficient = Specific planned comparison**
- b₁ might test: Control vs. All Treatments combined
- b₂ might test: Low Dose vs. High Dose
- Interpretation depends entirely on how you set up the contrasts

**Example Comparison**:

Suppose: Control mean = 10, Drug A mean = 15, Drug B mean = 20

**Dummy Coding** (Control as reference):
- b₀ = 10 (Control mean)
- b₁ = 5 (Drug A − Control)
- b₂ = 10 (Drug B − Control)

**Effect Coding**:
- Grand mean = (10 + 15 + 20)/3 = 15
- b₀ = 15 (grand mean)
- b₁ = 0 (Drug A − grand mean = 15 − 15)
- b₂ = 5 (Drug B − grand mean = 20 − 15)
- Control effect = −(0 + 5) = −5 (Control − grand mean = 10 − 15)

**Contrast** (Control vs. Drugs; Drug A vs. Drug B):
- b₀ = 15 (grand mean)
- b₁ = 7.5 (average of drugs [17.5] − Control [10])
- b₂ = 5 (Drug B [20] − Drug A [15])

---

### Identify Appropriate Scenarios for Different Coding Systems

**Use Dummy Coding When**:
- You have a clear control or comparison group
- You want to know how each treatment compares to control
- Running experimental studies with a baseline condition
- Presenting results to audiences unfamiliar with statistics
- Example: Clinical trial comparing new drugs to placebo

**Use Effect Coding When**:
- No single group is a natural reference
- You want to test deviations from the overall mean
- Conducting factorial ANOVA-type analyses
- All groups are equally important theoretically
- Example: Comparing satisfaction across different product brands

**Use Contrast Coding When**:
- You have specific a priori hypotheses
- You want to test planned comparisons
- Standard coding doesn't address your research question
- You have ordered categories suggesting trends
- Example: Testing whether high vs. low anxiety differs AND whether therapy reduces anxiety more than no intervention

**Use Polynomial Contrasts When**:
- Categories represent ordered levels (e.g., dosage, time)
- You want to test for linear, quadratic, or higher-order trends
- Investigating dose-response relationships
- Example: Testing whether increasing caffeine doses show a linear increase in alertness

**Decision Framework**:

1. **Is there a natural reference group?**
   - Yes → Consider dummy coding
   - No → Consider effect coding

2. **Do you have specific planned comparisons?**
   - Yes → Use contrast coding
   - No → Use dummy or effect coding

3. **Are categories ordered?**
   - Yes → Consider polynomial contrasts
   - No → Use categorical coding

4. **Is the audience specialized?**
   - Yes → Any coding is fine with proper explanation
   - No → Dummy coding is often clearest

5. **What is the research tradition in your field?**
   - Follow conventions but justify your choice

**Multiple Coding Schemes**:
- You can run the same model with different coding schemes
- The overall model fit (R², F-statistic) remains identical
- Only the interpretation of individual coefficients changes
- Can provide complementary insights by using multiple approaches

---

## Polynomial Regression

### Running R Output for Multiple Linear Regression with Polynomials

Polynomial regression models non-linear relationships by including powers of a predictor.

**Why Use Polynomial Regression**:
- When the relationship between X and Y is curved
- When scatterplots suggest non-linear patterns
- To test for diminishing returns or accelerating effects

**Basic Polynomial Model**:

**Quadratic (2nd degree)**:
`Y = b₀ + b₁X + b₂X²`

**Cubic (3rd degree)**:
`Y = b₀ + b₁X + b₂X² + b₃X³`

**In R**:

**Method 1: Using I() for raw polynomials**:
```
# Quadratic model
model_quad <- lm(Y ~ X + I(X^2), data = mydata)

# Cubic model
model_cubic <- lm(Y ~ X + I(X^2) + I(X^3), data = mydata)
```

**Method 2: Using poly() for orthogonal polynomials** (RECOMMENDED):
```
# Quadratic model
model_quad <- lm(Y ~ poly(X, 2), data = mydata)

# Cubic model
model_cubic <- lm(Y ~ poly(X, 3), data = mydata)

# Raw polynomials (not orthogonal)
model_quad_raw <- lm(Y ~ poly(X, 2, raw = TRUE), data = mydata)
```

**Orthogonal vs. Raw Polynomials**:

**Orthogonal** (poly with raw = FALSE, the default):
- Creates uncorrelated polynomial terms
- Reduces multicollinearity
- Easier to test each polynomial component independently
- Coefficients represent independent contributions
- **Use this for hypothesis testing**

**Raw** (poly with raw = TRUE or using I()):
- Creates standard X, X², X³ terms
- Terms are highly correlated (multicollinearity)
- Easier to write out the prediction equation
- **Use this for prediction or when you need the equation**

**Multiple Predictors with Polynomials**:
```
# Polynomial for one variable, linear for another
model <- lm(Y ~ poly(X1, 2) + X2, data = mydata)

# Polynomials for multiple variables
model <- lm(Y ~ poly(X1, 2) + poly(X2, 2), data = mydata)
```

**Polynomial with Interaction**:
```
# Interaction between linear terms
model <- lm(Y ~ poly(X1, 2) * X2, data = mydata)

# Polynomial interaction
model <- lm(Y ~ X1 * X2 + I(X1^2) + I(X2^2), data = mydata)
```

**Checking Your Model**:
```
summary(model_quad)
anova(model_quad)  # Tests each polynomial term

# Compare models
anova(model_linear, model_quad, model_cubic)
```

---

### Interpreting R Output for Polynomial Regression

**Understanding the Summary Output**:

```
Call:
lm(formula = Y ~ poly(X, 2), data = mydata)

Coefficients:
              Estimate Std. Error t value Pr(>|t|)
(Intercept)    50.000      0.500   100.0   <2e-16 ***
poly(X, 2)1    15.000      2.000     7.5   1.2e-10 ***
poly(X, 2)2    -8.000      2.000    -4.0   0.00015 ***
```

**Interpreting Coefficients with Orthogonal Polynomials**:

**(Intercept)**:
- Mean value of Y across all observations
- The average outcome in your sample

**poly(X, 2)1** (Linear term):
- Tests whether there is a linear relationship
- Positive = overall positive trend
- Negative = overall negative trend
- This is independent of the quadratic term

**poly(X, 2)2** (Quadratic term):
- Tests whether there is curvature in the relationship
- Positive = U-shaped curve (parabola opening upward)
- Negative = inverted U-shape (parabola opening downward)
- Significant quadratic term indicates non-linear relationship

**poly(X, 2)3** (Cubic term, if included):
- Tests for S-shaped or more complex curves
- Indicates two direction changes in the relationship

**Example Interpretation**:
"The linear term was significant (b = 15.0, p < .001), indicating an overall positive relationship. The quadratic term was also significant (b = −8.0, p < .001), suggesting the relationship follows an inverted U-shape, with performance increasing at lower levels of stress but declining at higher levels."

**With Raw Polynomials**:

```
Coefficients:
              Estimate Std. Error t value Pr(>|t|)
(Intercept)    20.000      2.000    10.0   <2e-16 ***
X               5.000      0.800     6.25  3.2e-8 ***
I(X^2)         -0.500      0.100    -5.0   1.5e-6 ***
```

**Interpreting Raw Polynomial Coefficients**:
- These coefficients build the prediction equation directly
- Prediction: Ŷ = 20 + 5X − 0.5X²
- The sign of X² term indicates direction of curvature
- Individual coefficients are harder to interpret due to multicollinearity
- Focus on the overall pattern and significance

**Model Fit Statistics**:
- **R²**: Proportion of variance explained (same interpretation as linear regression)
- **Adjusted R²**: Penalizes for adding polynomial terms
- **F-statistic**: Tests whether the overall model is significant
- Compare R² between linear and polynomial models to assess improvement

**ANOVA Output** (comparing nested models):
```
Analysis of Variance Table

Model 1: Y ~ X
Model 2: Y ~ poly(X, 2)
  Res.Df    RSS  Df Sum of Sq      F    Pr(>F)
1    148  12000
2    147   8000   1      4000   73.5  1.2e-14 ***
```

- Tests whether adding the quadratic term significantly improves fit
- Significant p-value means polynomial model is better

---

### Reporting R Output for Polynomial Regression

**What to Report**:

1. **Model Specification**:
   - Degree of polynomial tested
   - Whether orthogonal or raw polynomials were used
   - Why polynomial regression was chosen (e.g., visual inspection suggested non-linearity)

2. **Significance of Polynomial Terms**:
   - Test results for each polynomial component
   - Coefficients, standard errors, t-values, p-values

3. **Model Fit**:
   - R² and adjusted R²
   - Comparison with simpler models (e.g., linear)
   - F-statistic for overall model

4. **Visualization**:
   - Always include a plot showing the fitted curve
   - Confidence bands around predictions

5. **Interpretation**:
   - Describe the shape of the relationship
   - Identify turning points if relevant
   - Practical implications of the curved relationship

**Example Report (APA Style)**:

"A quadratic regression model was fitted to examine the relationship between study hours (X) and test performance (Y). Visual inspection of the scatterplot suggested a non-linear relationship. The quadratic model (Y = b₀ + b₁X + b₂X²) explained significantly more variance (R² = .68, adjusted R² = .67) than the linear model (R² = .42, adjusted R² = .41), ΔR² = .26, F(1, 147) = 73.5, p < .001.

Both the linear term (b = 15.0, SE = 2.0, p < .001) and quadratic term (b = −8.0, SE = 2.0, p < .001) were statistically significant. The negative quadratic coefficient indicates an inverted U-shaped relationship: test performance increased with additional study hours up to approximately 6 hours, after which additional studying was associated with diminishing or negative returns, possibly reflecting fatigue or ineffective study strategies. See Figure 1 for the fitted curve with 95% confidence intervals."

**Creating Visualizations in R**:
```
# Fit the model
model <- lm(Y ~ poly(X, 2), data = mydata)

# Create prediction data
pred_data <- data.frame(X = seq(min(mydata$X), max(mydata$X), length.out = 100))
predictions <- predict(model, newdata = pred_data, interval = "confidence")

# Plot
plot(mydata$X, mydata$Y, xlab = "Study Hours", ylab = "Test Performance",
     main = "Quadratic Relationship Between Study Hours and Performance")
lines(pred_data$X, predictions[,1], col = "blue", lwd = 2)  # Fitted line
lines(pred_data$X, predictions[,2], col = "red", lty = 2)    # Lower CI
lines(pred_data$X, predictions[,3], col = "red", lty = 2)    # Upper CI

# Or using ggplot2
library(ggplot2)
ggplot(mydata, aes(x = X, y = Y)) +
  geom_point() +
  geom_smooth(method = "lm", formula = y ~ poly(x, 2)) +
  labs(x = "Study Hours", y = "Test Performance",
       title = "Quadratic Relationship")
```

**Common Mistakes to Avoid**:
- Not reporting which type of polynomial (orthogonal vs. raw) was used
- Interpreting raw polynomial coefficients as independent effects
- Not showing a visualization of the fitted curve
- Fitting higher-degree polynomials without theoretical justification
- Not comparing polynomial model to simpler alternatives
- Over-interpreting coefficients without considering the overall pattern

**Determining Turning Points** (for raw polynomials):

For quadratic: Ŷ = b₀ + b₁X + b₂X²

Turning point (vertex) occurs at: X = −b₁/(2b₂)

Example:
```
Ŷ = 20 + 5X − 0.5X²
Turning point: X = −5/(2 × −0.5) = −5/(−1) = 5

At X = 5: Ŷ = 20 + 5(5) − 0.5(25) = 20 + 25 − 12.5 = 32.5
```

Report: "The quadratic relationship peaked at approximately 5 study hours (Ŷ = 32.5), after which performance declined."

---

## Model Comparison

### Running Model Comparisons Using AIC

**What is AIC (Akaike Information Criterion)**:
- A measure of model quality that balances fit and complexity
- Lower AIC values indicate better models
- Penalizes models for having more parameters
- Formula: AIC = −2(log-likelihood) + 2k, where k = number of parameters

**When to Use AIC**:
- Comparing non-nested models (models that aren't subsets of each other)
- Comparing models with different predictors
- Selecting among multiple candidate models
- When you want to balance goodness-of-fit with parsimony

**In R**:

**Basic AIC Calculation**:
```
# Fit multiple models
model1 <- lm(Y ~ X1, data = mydata)
model2 <- lm(Y ~ X1 + X2, data = mydata)
model3 <- lm(Y ~ X1 + X2 + X3, data = mydata)
model4 <- lm(Y ~ X1 * X2, data = mydata)

# Get AIC for each model
AIC(model1)
AIC(model2)
AIC(model3)
AIC(model4)

# Compare all at once
AIC(model1, model2, model3, model4)
```

**Output**:
```
        df      AIC
model1   3   1250.5
model2   4   1235.2
model3   5   1238.7
model4   5   1220.3
```

**Using AICc (corrected AIC for small samples)**:
```
library(AICcmodavg)
AICc(model1)
AICc(model2)

# When sample size / parameters < 40, use AICc
```

**Systematic Model Comparison**:
```
# Create a list of models
models <- list(model1, model2, model3, model4)
model_names <- c("M1: X1 only", "M2: X1+X2", "M3: X1+X2+X3", "M4: X1*X2")

# Get AICs
aics <- sapply(models, AIC)
data.frame(Model = model_names, AIC = aics)
```

---

### Running Model Comparisons Using Log Likelihood

**What is Log Likelihood**:
- Measures how well the model fits the data
- Higher (less negative) values indicate better fit
- Doesn't penalize for model complexity
- Can be used to calculate likelihood ratio tests for nested models

**When to Use Log Likelihood**:
- Comparing nested models (where one model is a subset of another)
- Conducting formal hypothesis tests between models
- When you want to test whether adding predictors significantly improves fit
- With mixed models (lmer)

**In R**:

**Extracting Log Likelihood**:
```
# Get log-likelihood for a model
logLik(model1)
logLik(model2)
```

**Output**:
```
'log Lik.' -622.3 (df=3)
'log Lik.' -614.6 (df=4)
```

**Likelihood Ratio Test (for nested models)**:
```
# Method 1: Using anova()
anova(model1, model2)

# Method 2: Manual calculation
ll1 <- logLik(model1)
ll2 <- logLik(model2)
test_statistic <- -2 * (as.numeric(ll1) - as.numeric(ll2))
df_diff <- attr(ll2, "df") - attr(ll1, "df")
p_value <- pchisq(test_statistic, df_diff, lower.tail = FALSE)

data.frame(ChiSq = test_statistic, df = df_diff, p = p_value)
```

**ANOVA Output for Nested Models**:
```
Analysis of Variance Table

Model 1: Y ~ X1
Model 2: Y ~ X1 + X2
  Res.Df    RSS Df Sum of Sq      F    Pr(>F)
1    148  12000
2    147   9500  1      2500  38.95  3.2e-9 ***
```

**For Mixed Models**:
```
library(lme4)
model_null <- lmer(Y ~ X1 + (1|Subject), data = mydata, REML = FALSE)
model_alt <- lmer(Y ~ X1 + X2 + (1|Subject), data = mydata, REML = FALSE)

# NOTE: Must use REML = FALSE for likelihood ratio tests
anova(model_null, model_alt)
```

---

### Interpreting Model Comparison Output

**AIC Interpretation**:

**Absolute Differences**:
- ΔAIC < 2: Models are essentially equivalent
- ΔAIC 2-4: Some support for the model with lower AIC
- ΔAIC 4-7: Considerably less support for model with higher AIC
- ΔAIC > 10: Essentially no support for model with higher AIC

**Example**:
```
        df      AIC    ΔAIC
model1   3   1250.5   30.2  (worst)
model2   4   1235.2   14.9
model3   5   1238.7   18.4
model4   5   1220.3    0.0  (best)
```

Interpretation: "Model 4 (including the interaction between X1 and X2) had the lowest AIC (1220.3) and was substantially better than all other models (ΔAIC > 10). Model 2 showed moderate support (ΔAIC = 14.9), while Models 1 and 3 had essentially no support (ΔAIC > 10)."

**Akaike Weights** (relative likelihood of each model):
```
library(AICcmodavg)
aictab(list(model1, model2, model3, model4), 
       modnames = c("M1", "M2", "M3", "M4"))
```

Output might show:
- Model 1: weight = 0.01 (1% probability of being best)
- Model 2: weight = 0.15 (15%)
- Model 3: weight = 0.10 (10%)
- Model 4: weight = 0.74 (74%)

**Log Likelihood Interpretation**:

**For Nested Models** (using likelihood ratio test):

```
  Res.Df    RSS Df Sum of Sq      F    Pr(>F)
1    148  12000
2    147   9500  1      2500  38.95  3.2e-9 ***
```

- **Df**: Degrees of freedom difference (number of parameters added)
- **Sum of Sq**: Reduction in residual sum of squares
- **F**: F-statistic testing whether the improvement is significant
- **Pr(>F)**: p-value; if < .05, the more complex model fits significantly better

Interpretation: "Adding X2 to the model significantly improved fit, F(1, 147) = 38.95, p < .001, reducing the residual sum of squares by 2500."

**Chi-Square Test** (alternative for nested models):
```
Likelihood ratio test

Model 1: Y ~ X1
Model 2: Y ~ X1 + X2
  #Df  LogLik Df  Chisq Pr(>Chisq)
1   3 -622.26
2   4 -614.61  1  15.32   9.1e-05 ***
```

- **Chisq**: Chi-square test statistic (= −2 × difference in log-likelihoods)
- **Pr(>Chisq)**: p-value; if < .05, more complex model is better
- Uses chi-square distribution with df = difference in parameters

Interpretation: "The likelihood ratio test indicated that Model 2 provided significantly better fit than Model 1, χ²(1) = 15.32, p < .001."

---

### Determining Which Model is the Better Fit

**Decision Framework**:

**1. Start with Theory**:
- Does the model make theoretical sense?
- Are all predictors justified by your research question?
- Avoid purely data-driven model selection

**2. Consider Model Complexity**:
- Simpler models are generally preferable (parsimony principle)
- Only add complexity if it provides meaningful improvement
- Beware of overfitting with too many parameters

**3. Use Multiple Criteria**:

**For Nested Models**:
- Use likelihood ratio test (ANOVA comparison)
- If p < .05, the more complex model is justified
- Also check AIC/BIC for convergence of evidence

**For Non-Nested Models**:
- Compare AIC values (lower is better)
- Consider ΔAIC thresholds
- Look at Akaike weights if using multiple models

**4. Examine Effect Sizes**:
- How much additional variance is explained (ΔR²)?
- Are the new coefficients practically meaningful?
- Do confidence intervals exclude zero?

**5. Check Assumptions**:
- Does the better-fitting model meet assumptions?
- Are residuals better behaved?
- Are there fewer violations?

**6. Consider Prediction**:
- Use cross-validation if prediction is the goal
- Split data into training and test sets
- Compare prediction error across models

**7. Interpretability**:
- Can you explain the model to stakeholders?
- Is the added complexity worth reduced interpretability?
- Consider your audience's statistical sophistication

**Example Decision Process**:

```
Model 1: Y ~ X1                    (AIC = 1250, R² = .35)
Model 2: Y ~ X1 + X2               (AIC = 1235, R² = .48)
Model 3: Y ~ X1 + X2 + X3          (AIC = 1238, R² = .49)
Model 4: Y ~ X1 * X2               (AIC = 1220, R² = .55)
```

**Analysis**:
1. Model 2 vs. Model 1: ΔAIC = 15, ΔR² = .13 → Model 2 clearly better
2. Model 3 vs. Model 2: ΔAIC = −3, ΔR² = .01 → Model 2 preferred (simpler)
3. Model 4 vs. Model 2: ΔAIC = 15, ΔR² = .07 → Model 4 better, but is the interaction interpretable?
4. Check LRT: Model 4 vs. Model 2 → χ²(1) = 35.2, p < .001

**Decision**: "Model 4 was selected as it had the lowest AIC (1220) and explained significantly more variance than simpler alternatives (R² = .55). The interaction between X1 and X2 was both statistically significant (p < .001) and theoretically meaningful."

**Common Pitfalls**:
- Selecting based solely on p-values without considering effect size
- Ignoring theoretical justification in favor of statistical fit
- Overfitting by including too many predictors
- Not validating the model on held-out data
- Comparing models fit on different datasets or with different missing data
- Using REML = TRUE when comparing mixed models with different fixed effects

**Best Practices**:
- Pre-register planned models when possible
- Report all models considered, not just the "best" one
- Acknowledge when model selection is exploratory
- Use information criteria as guides, not absolute rules
- Consider sensitivity analyses with alternative models
- Balance statistical fit with interpretability and theory

---

## Mixed Models

### Running Basic Mixed Models Using lmer()

**What Are Mixed Models**:
- Also called multilevel models, hierarchical linear models, or random effects models
- Account for nested or grouped data (e.g., students within schools, repeated measures within subjects)
- Include both fixed effects (predictors of interest) and random effects (grouping variables)
- Handle non-independence in data

**When to Use Mixed Models**:
- Repeated measures from the same individuals
- Participants nested within clusters (schools, therapists, families)
- Data with hierarchical structure
- When you want to generalize beyond your specific sample of groups

**Basic Setup in R**:
```
library(lme4)

# Install if needed
# install.packages("lme4")
```

**Basic Random Intercept Model**:
```
# Syntax: outcome ~ fixed_effects + (random_effects | grouping_variable)
model <- lmer(Y ~ X1 + (1 | Subject), data = mydata)

# (1 | Subject) means: random intercept for each Subject
```

**Example**:
```
# Predicting test scores from study hours, with students nested in classrooms
model <- lmer(test_score ~ study_hours + (1 | classroom), data = school_data)
```

**Random Intercept + Random Slope**:
```
# Allow the effect of X1 to vary by Subject
model <- lmer(Y ~ X1 + (1 + X1 | Subject), data = mydata)

# Alternative notation (equivalent)
model <- lmer(Y ~ X1 + (X1 | Subject), data = mydata)
```

**Multiple Random Effects**:
```
# Random intercepts for multiple grouping levels
model <- lmer(score ~ treatment + (1 | subject) + (1 | therapist), data = mydata)

# Crossed random effects (subjects and items)
model <- lmer(RT ~ condition + (1 | subject) + (1 | item), data = mydata)
```

**Including Multiple Fixed Effects**:
```
# Multiple predictors with random intercept
model <- lmer(Y ~ X1 + X2 + X3 + (1 | Subject), data = mydata)

# With interactions
model <- lmer(Y ~ X1 * X2 + (1 | Subject), data = mydata)
```

**Viewing Results**:
```
summary(model)

# For p-values (requires lmerTest package)
library(lmerTest)
model <- lmer(Y ~ X1 + (1 | Subject), data = mydata)
summary(model)

# Confidence intervals
confint(model)

# Random effects estimates
ranef(model)

# Fixed effects only
fixef(model)
```

**Model Comparison** (requires REML = FALSE):
```
# Fit models with REML = FALSE for comparison
model1 <- lmer(Y ~ X1 + (1 | Subject), data = mydata, REML = FALSE)
model2 <- lmer(Y ~ X1 + X2 + (1 | Subject), data = mydata, REML = FALSE)

# Compare
anova(model1, model2)
```

---

### Interpreting Mixed Models Output

**Understanding the Summary Output**:

```
Linear mixed model fit by REML ['lmerMod']
Formula: test_score ~ study_hours + (1 | classroom)
   Data: school_data

REML criterion at convergence: 2450.3

Scaled residuals:
    Min      1Q  Median      3Q     Max
-3.1234 -0.6543 -0.0123  0.6789  2.8901

Random effects:
 Groups    Name        Variance Std.Dev.
 classroom (Intercept) 45.23    6.73
 Residual              120.45   10.98
Number of obs: 500, groups:  classroom, 25

Fixed effects:
             Estimate Std. Error t value
(Intercept)   65.340      2.145   30.46
study_hours    2.450      0.312    7.85

Correlation of Fixed Effects:
            (Intr)
study_hours -0.234
```

**Interpreting Each Section**:

**Random Effects**:
```
 Groups    Name        Variance Std.Dev.
 classroom (Intercept) 45.23    6.73
 Residual              120.45   10.98
```

- **classroom (Intercept) Variance**: Between-classroom variability in intercepts
  - Variance = 45.23, SD = 6.73
  - Different classrooms have different baseline scores
  - This captures clustering within classrooms

- **Residual Variance**: Within-classroom variability
  - Variance = 120.45, SD = 10.98
  - Individual differences within the same classroom

- **Intraclass Correlation (ICC)**:
  - ICC = Between-group variance / Total variance
  - ICC = 45.23 / (45.23 + 120.45) = 0.27
  - 27% of variance in scores is due to classroom differences
  - 73% is due to individual differences within classrooms

**Fixed Effects**:
```
             Estimate Std. Error t value
(Intercept)   65.340      2.145   30.46
study_hours    2.450      0.312    7.85
```

- **(Intercept)**: Expected score when study_hours = 0, averaged across all classrooms
- **study_hours**: For each additional hour studied, scores increase by 2.45 points on average
- **t value**: Test statistic (Estimate / SE)
- **p-values**: Not shown in lme4 by default; use lmerTest package for p-values

**Interpretation**: "On average across classrooms, each additional hour of study was associated with a 2.45-point increase in test scores (SE = 0.31, t = 7.85). There was substantial variability between classrooms (SD = 6.73), with 27% of the total variance in scores attributable to classroom differences."

**With Random Slopes**:

```
Random effects:
 Groups    Name        Variance Std.Dev. Corr
 classroom (Intercept) 45.23    6.73
           study_hours  1.25    1.12     -0.34
 Residual              115.20   10.73
```

- **study_hours Variance**: The effect of study hours varies across classrooms
- **Corr = -0.34**: Classrooms with higher average scores tend to show weaker effects of study hours (negative correlation between random intercepts and slopes)

**Random Effects Estimates**:
```
ranef(model)

$classroom
           (Intercept)
Classroom1      -2.34
Classroom2       5.67
Classroom3      -1.23
...
```

- Shows deviation of each classroom from the overall intercept
- Classroom 2 has scores 5.67 points higher than average (after accounting for study hours)

---

### Reporting Mixed Models Output

**What to Report**:

1. **Model Specification**:
   - Fixed effects included
   - Random effects structure
   - Grouping variables and nesting structure
   - Number of observations and groups

2. **Random Effects**:
   - Variance components for random effects
   - ICCs or variance partition coefficients
   - Whether random slopes were included

3. **Fixed Effects**:
   - Coefficients, standard errors, and test statistics
   - Confidence intervals
   - p-values (if using lmerTest or other package)

4. **Model Fit** (if comparing models):
   - AIC, BIC, log-likelihood
   - Likelihood ratio test results

5. **Assumptions**:
   - Whether assumptions were checked
   - Any violations and how they were addressed

**APA-Style Example**:

"A linear mixed model was fitted using the lmer() function in R (Bates et al., 2015) to examine the relationship between study hours and test scores while accounting for the nesting of students within classrooms. The model included study hours as a fixed effect and a random intercept for classroom.

The model revealed significant between-classroom variability in test scores (SD = 6.73), with an intraclass correlation of .27, indicating that 27% of the variance in scores was attributable to classroom membership. After accounting for classroom effects, each additional hour of study was associated with a 2.45-point increase in test scores (SE = 0.31), 95% CI [1.84, 3.06], t(473) = 7.85, p < .001.

A model comparison using likelihood ratio tests indicated that allowing the effect of study hours to vary by classroom (random slopes model) did not significantly improve fit, χ²(2) = 3.45, p = .178. Therefore, the more parsimonious random intercept model was retained."

**Table Format**:

```
Fixed Effects
Predictor      b      SE     t      95% CI
Intercept    65.34   2.15  30.46  [61.12, 69.56]
Study Hours   2.45   0.31   7.85  [ 1.84,  3.06]

Random Effects
Component          Variance   SD
Classroom (Int.)    45.23    6.73
Residual           120.45   10.98

Model Fit: N = 500, Groups = 25, AIC = 2468.3, BIC = 2481.7
```

**In-Text Summary** (brief version):
"Study hours predicted test scores (b = 2.45, SE = 0.31, p < .001) after controlling for classroom clustering (ICC = .27)."

---

### Random Intercepts

**Concept**:
- Allows the baseline level (intercept) to vary across groups
- Each group has its own intercept, but the same slope for predictors
- Accounts for systematic differences between groups

**Interpretation**:
- **Variance of Random Intercept**: How much groups differ in their baseline levels
- Large variance → groups are very different
- Small variance → groups are similar; might not need mixed model

**Visual Representation**:
Imagine parallel regression lines for each group:
- Each line has a different intercept (vertical position)
- All lines have the same slope (parallel)

**Example**:
Students in different schools taking the same test:
- Random intercept: Schools differ in average test performance
- Same slope: The effect of study hours is the same across all schools

**When to Use**:
- When you expect groups to differ in their overall levels
- Most basic form of mixed model
- Starting point before considering random slopes

**Statistical Assumption**:
- Random intercepts are assumed to be normally distributed around the grand mean
- Mean of random intercepts = 0
- Variance estimated by the model

---

### Random Slopes

**Concept**:
- Allows the effect of a predictor to vary across groups
- Each group has its own slope for the relationship between X and Y
- Captures heterogeneity in how groups respond to a predictor

**Interpretation**:
- **Variance of Random Slope**: How much the effect varies across groups
- Large variance → the effect is very different across groups
- Small variance → effect is similar across groups

**Visual Representation**:
Regression lines for each group that are not parallel:
- Each line has a different slope (angle)
- Lines can cross each other

**Example**:
Effect of a training program on performance across different companies:
- Random slope: Training works better in some companies than others
- Some companies might show large improvements, others minimal

**When to Use**:
- When theory suggests the effect varies by group
- When visual inspection shows heterogeneity in slopes
- To test for group-level moderation

**Model Comparison**:
```
# Random intercept only
model_RI <- lmer(Y ~ X + (1 | Group), data = mydata, REML = FALSE)

# Random intercept and random slope
model_RS <- lmer(Y ~ X + (1 + X | Group), data = mydata, REML = FALSE)

# Test if random slope is needed
anova(model_RI, model_RS)
```

If significant: Random slopes improve fit; retain them
If non-significant: Random intercept model is sufficient (simpler is better)

**Correlation Between Random Intercepts and Slopes**:
```
Random effects:
 Groups Name        Variance Std.Dev. Corr
 School (Intercept) 50.00    7.07
        X            2.50    1.58     -0.65
```

- **Negative correlation (−0.65)**: Schools with higher baseline scores show weaker effects of X
- **Positive correlation**: Schools with higher baselines show stronger effects of X
- Can reveal important substantive patterns

**Caution**:
- Random slopes can lead to convergence issues with small sample sizes
- Require sufficient number of groups (typically 20+)
- Can make models computationally intensive
- Consider whether theoretically justified before including

---

## Growth Curve Models

### Running Basic Growth Curve Models Using lmer()

**What Are Growth Curve Models**:
- Special type of mixed model for analyzing change over time
- Also called longitudinal models or multilevel models for change
- Model individual trajectories of change (e.g., learning, development, recovery)
- Account for repeated measures within individuals

**When to Use**:
- Three or more time points per individual
- Interest in modeling trajectories of change
- Variation in both initial status and rate of change across individuals
- Unbalanced data (missing time points) are okay

**Basic Linear Growth Model**:

```
# Time coded as 0, 1, 2, 3, ...
model_linear <- lmer(outcome ~ time + (1 + time | id), data = longdata)

# (1 + time | id) means:
#   1: Random intercept (individual starting points)
#   time: Random slope (individual growth rates)
```

**Data Structure**:
```
id   time   outcome
1    0      10
1    1      12
1    2      15
1    3      17
2    0      8
2    1      11
2    2      13
2    3      14
...
```

**Interpretation of Time Coding**:
- **Time = 0** at first measurement: Intercept = initial status
- **Time = 1, 2, 3...**: Linear change per time unit
- Can use actual time values (days, weeks, years) for meaningful slopes

**Quadratic Growth Model** (for non-linear change):
```
# Add time squared for curvilinear growth
longdata$time2 <- longdata$time^2
model_quad <- lmer(outcome ~ time + time2 + (1 + time + time2 | id), 
                   data = longdata, REML = FALSE)
```

**Adding Time-Invariant Predictors** (e.g., treatment group):
```
# Treatment predicts both intercept and slope
model <- lmer(outcome ~ time * treatment + (1 + time | id), 
              data = longdata)
```

**Adding Time-Varying Covariates**:
```
# Stress measured at each time point
model <- lmer(outcome ~ time + stress + (1 + time | id), 
              data = longdata)
```

**Centering Time**:
```
# Center time at midpoint or meaningful occasion
longdata$time_centered <- longdata$time - mean(longdata$time)
model <- lmer(outcome ~ time_centered + (1 + time_centered | id), 
              data = longdata)
```

---

### Interpreting Growth Curve Models Output

**Linear Growth Model Output**:

```
Linear mixed model fit by REML
Formula: depression ~ time + (1 + time | patient)

Random effects:
 Groups  Name        Variance Std.Dev. Corr
 patient (Intercept) 25.40    5.04
         time         4.15    2.04     -0.42
 Residual            12.30    3.51

Fixed effects:
            Estimate Std. Error t value
(Intercept)  32.450      0.850   38.18
time         -2.150      0.340   -6.32
```

**Interpreting Random Effects**:

**Variance of Intercept (25.40)**:
- Variability in depression scores at time 0 (baseline)
- SD = 5.04 means individuals differ by about 5 points at baseline
- Reflects individual differences in initial depression

**Variance of Slope (4.15)**:
- Variability in rate of change over time
- SD = 2.04 means rate of change varies by about 2 points per time unit
- Some people improve faster than others

**Correlation (−0.42)**:
- Patients with higher baseline depression tend to show greater improvement
- Negative correlation: High initial status → steeper negative slope
- Regression to the mean or treatment effectiveness for severe cases

**Residual Variance (12.30)**:
- Variability not explained by individual trajectories
- Within-person fluctuations around their own trajectory

**Interpreting Fixed Effects**:

**(Intercept = 32.45)**:
- Average depression score at time 0
- Expected initial status across all patients

**time (−2.15)**:
- Average rate of change per time unit
- Patients improve by 2.15 points per time period on average
- Negative = decreasing depression over time

**Substantive Interpretation**:
"On average, patients started with a depression score of 32.45 (SE = 0.85) and improved by 2.15 points per month (SE = 0.34, p < .001). There was substantial individual variability in both initial depression (SD = 5.04) and rate of improvement (SD = 2.04), with a moderate negative correlation (r = −0.42) indicating that patients with higher initial depression showed greater improvement rates."

**With Treatment Predictor**:

```
Fixed effects:
                  Estimate Std. Error t value
(Intercept)        32.450      0.850   38.18
time               -1.500      0.450   -3.33
treatment           2.100      1.200    1.75
time:treatment     -1.300      0.600   -2.17
```

**(Intercept)**: Initial depression for control group
**treatment**: Difference in initial depression between groups
**time**: Slope for control group (rate of change)
**time:treatment**: Difference in slopes (treatment effect on change)

Interpretation: "The treatment group showed an additional 1.3-point decrease per month beyond the control group's improvement (b = −1.30, SE = 0.60, p = .03), indicating that treatment accelerated the rate of recovery."

**Quadratic Growth**:

```
Fixed effects:
            Estimate Std. Error t value
(Intercept)  32.450      0.850   38.18
time         -3.500      0.450   -7.78
time2         0.250      0.080    3.13
```

**time2 (0.25)**: Positive quadratic term
- Indicates deceleration of improvement
- Rapid initial improvement that slows over time
- U-shaped or inverted-U trajectory

---

### Reporting Growth Curve Models Output

**What to Report**:

1. **Model Specification**:
   - Functional form of time (linear, quadratic)
   - Random effects structure
   - Time-invariant and time-varying predictors
   - Centering or coding of time variable

2. **Sample Description**:
   - Number of individuals
   - Number of observations
   - Time points and spacing
   - Missing data patterns

3. **Growth Parameters**:
   - Fixed effects (average trajectory)
   - Random effects (individual variability)
   - Covariance between random effects

4. **Model Fit** (if comparing models):
   - Fit indices (AIC, BIC)
   - Likelihood ratio tests

5. **Visualization**:
   - Plot of average trajectory
   - Individual trajectories (spaghetti plot)
   - Group comparisons if relevant

**APA-Style Example**:

"A linear growth curve model was fitted using lmer() to examine trajectories of depression over 6 months of treatment (N = 150 patients, 4 time points). Time was coded 0-3 (months). The model included random intercepts and random slopes for time.

Results indicated a significant average decline in depression scores over time (b = −2.15 points per month, SE = 0.34, 95% CI [−2.82, −1.48], t = −6.32, p < .001), starting from an average baseline of 32.45 (SE = 0.85). There was substantial individual variability in both initial depression (SD = 5.04, variance = 25.40) and rates of change (SD = 2.04, variance = 4.15). The moderate negative correlation between intercepts and slopes (r = −0.42) suggested that patients with higher baseline depression showed faster rates of improvement.

A treatment × time interaction model revealed that cognitive-behavioral therapy (CBT) accelerated improvement beyond natural recovery (b = −1.30, SE = 0.60, p = .03), with CBT patients improving an additional 1.3 points per month compared to the waitlist control group. See Figure 1 for predicted trajectories by group."

**Table Format**:

```
Growth Curve Model for Depression Trajectories

Fixed Effects                 b      SE      t      95% CI
Intercept (initial status) 32.45   0.85   38.18  [30.78, 34.12]
Time (rate of change)      -2.15   0.34   -6.32  [-2.82, -1.48]
Treatment                   2.10   1.20    1.75  [-0.26,  4.46]
Time × Treatment           -1.30   0.60   -2.17  [-2.48, -0.12]

Random Effects           Variance    SD    Correlation
Initial Status (Intercept) 25.40   5.04
Rate of Change (Slope)      4.15   2.04      -0.42
Residual                   12.30   3.51

Model Fit: N = 150, Observations = 600, AIC = 3245.7
```

**Visualization in R**:
```
library(ggplot2)

# Predicted trajectories for each treatment group
pred_data <- expand.grid(
  time = 0:3,
  treatment = c("Control", "CBT"),
  id = NA
)
pred_data$fitted <- predict(model, newdata = pred_data, re.form = NA)

# Plot average trajectories
ggplot(pred_data, aes(x = time, y = fitted, color = treatment, group = treatment)) +
  geom_line(size = 1.5) +
  labs(x = "Time (months)", y = "Depression Score",
       title = "Predicted Depression Trajectories by Treatment Group") +
  theme_minimal()

# Individual trajectories (spaghetti plot)
ggplot(longdata, aes(x = time, y = outcome, group = id)) +
  geom_line(alpha = 0.2) +
  geom_smooth(aes(group = 1), method = "lm", se = TRUE, color = "blue", size = 1.5) +
  labs(x = "Time", y = "Depression Score",
       title = "Individual and Average Depression Trajectories")
```

**Common Patterns to Report**:

**Linear Growth**: Constant rate of change
- "Scores increased linearly by X units per time period"

**Quadratic Growth**: Acceleration or deceleration
- "Improvement was rapid initially but decelerated over time" (positive time²)
- "Scores declined slowly at first then accelerated" (negative time²)

**Group Differences in Intercepts**: Baseline differences
- "Treatment and control groups differed at baseline"

**Group Differences in Slopes**: Differential change
- "The treatment group showed faster improvement than controls"

**Correlation of Intercepts and Slopes**:
- Negative: "Higher baseline associated with faster improvement"
- Positive: "Higher baseline associated with slower improvement"

---

This completes the detailed explanations for all remaining concepts on your exam checkpoint list!