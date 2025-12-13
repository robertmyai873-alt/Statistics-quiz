# Module 6: Multiple Linear Regression

126. **Multiple linear regression allows you to:**
     A. Predict Y from multiple X variables simultaneously
     B. Predict multiple Y variables from one X
     C. Test only one predictor at a time
     D. Only work with categorical variables

127. **In multiple regression, multicollinearity refers to:**
     A. Multiple dependent variables
     B. High correlations between predictor variables
     C. Multiple interaction terms
     D. Non-linear relationships

128. **The adjusted R² is preferred over R² in multiple regression because:**
     A. It's easier to calculate
     B. It penalizes for the number of predictors in the model
     C. It's always larger than R²
     D. It doesn't require assumptions

129. **A Variance Inflation Factor (VIF) greater than 10 suggests:**
     A. Strong multicollinearity
     B. Good model fit
     C. Normality of residuals
     D. Heteroscedasticity

130. **In the regression equation Y = β₀ + β₁X₁ + β₂X₂ + ε, β₁ represents:**
     A. The intercept
     B. The effect of X₁ on Y, holding X₂ constant
     C. The correlation between X₁ and X₂
     D. The error term

131. **Which R function can calculate VIF values?**
     A. `vif()` from the `car` package
     B. `multicollinearity()`
     C. `variance_inflation()`
     D. `vif()` from base R

132. **Suppression in multiple regression occurs when:**
     A. One predictor cancels out another
     B. A predictor becomes significant only when other predictors are included
     C. All predictors are non-significant
     D. R² becomes negative

133. **The assumption of no perfect multicollinearity means:**
     A. Predictors cannot be correlated at all
     B. No predictor can be perfectly predicted by other predictors
     C. All correlations must be below 0.5
     D. Only two predictors are allowed

134. **Marginal R² in the context of mixed models refers to:**
     A. The variance explained by fixed effects only
     B. The total variance explained
     C. The variance explained by random effects only
     D. The residual variance

135. **Conditional R² in mixed models refers to:**
     A. The variance explained by fixed effects only
     B. The variance explained by both fixed and random effects
     C. The conditional probability
     D. The variance explained by interactions only

136. **When adding predictors to a model, R² will:**
     A. Always decrease
     B. Always increase or stay the same
     C. Sometimes increase, sometimes decrease
     D. Always stay the same

137. **The F-test in multiple regression tests the hypothesis that:**
     A. All regression coefficients equal zero
     B. All predictors are uncorrelated
     C. The model assumptions are met
     D. The residuals are normal

138. **A significant F-test but non-significant t-tests for individual predictors suggests:**
     A. Multicollinearity issues
     B. Heteroscedasticity
     C. Non-normality
     D. Perfect model fit

139. **Which diagnostic plot helps identify influential observations?**
     A. Q-Q plot
     B. Cook's distance plot
     C. Histogram of residuals
     D. Scatterplot matrix

140. **In standardized regression (beta weights), all variables are:**
     A. Converted to categorical
     B. Centered and scaled to have mean = 0 and SD = 1
     C. Log-transformed
     D. Squared

141. **The tolerance value is related to VIF by:**
     A. Tolerance = VIF
     B. Tolerance = 1/VIF
     C. Tolerance = VIF²
     D. Tolerance = VIF - 1

142. **When reporting multiple regression results, you should include:**
     A. Only the R² value
     B. Coefficients, standard errors, t-values, and p-values
     C. Only significant predictors
     D. Only the F-statistic

143. **A hierarchical regression involves:**
     A. Adding predictors in predetermined blocks
     B. Removing non-significant predictors
     C. Using categorical predictors only
     D. Testing interactions only

144. **The residual standard error in multiple regression represents:**
     A. The average prediction error
     B. The standard deviation of the residuals
     C. The correlation between predictors
     D. The confidence interval width

145. **If a predictor has a coefficient of 2.5 with SE = 0.5, the t-value is:**
     A. 2.0
     B. 3.0
     C. 5.0
     D. 1.25

146. **Cross-validation in multiple regression helps assess:**
     A. Multicollinearity
     B. Model generalizability to new data
     C. Assumption violations
     D. Variable significance

147. **The hat matrix in regression relates to:**
     A. Residual calculations
     B. Leverage values for observations
     C. Correlation matrix
     D. Coefficient estimates

148. **When predictors are highly correlated, the standard errors of coefficients:**
     A. Decrease
     B. Increase
     C. Stay the same
     D. Become negative

149. **A partial regression plot shows:**
     A. The relationship between Y and X₁ after removing effects of other predictors
     B. Only the significant predictors
     C. The correlation matrix
     D. The residual distribution

150. **Ridge regression is used to handle:**
     A. Non-normality
     B. Heteroscedasticity
     C. Multicollinearity
     D. Outliers