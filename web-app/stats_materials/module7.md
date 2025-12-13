# Module 7: Outliers

151. **An outlier is defined as:**
     A. Any data point above the mean
     B. A data point that is unusually far from other observations
     C. The highest value in the dataset
     D. A data point with missing values

152. **The interquartile range (IQR) method defines outliers as points:**
     A. Beyond Q1 - 1.5×IQR or Q3 + 1.5×IQR
     B. Beyond the mean ± 2 standard deviations
     C. In the top and bottom 5% of the distribution
     D. Beyond Q1 + 1.5×IQR or Q3 - 1.5×IQR

153. **Cook's distance measures:**
     A. The distance between observations
     B. How much the regression coefficients change when an observation is removed
     C. The correlation between variables
     D. The residual variance

154. **A standardized residual greater than |3| suggests:**
     A. A potential outlier
     B. Perfect model fit
     C. Normality of residuals
     D. Homoscedasticity

155. **Leverage values indicate:**
     A. How influential an observation is on the regression line
     B. The correlation strength
     C. The prediction accuracy
     D. The residual magnitude

156. **Which R function can identify outliers using the IQR method?**
     A. `outliers()`
     B. `boxplot.stats()`
     C. `find_outliers()`
     D. `extreme_values()`

157. **DFBETAS measure:**
     A. The overall influence of an observation
     B. The influence of an observation on individual regression coefficients
     C. The prediction accuracy
     D. The correlation coefficients

158. **When dealing with outliers, you should:**
     A. Always remove them immediately
     B. Investigate them first to understand why they occurred
     C. Ignore them completely
     D. Replace them with the mean

159. **A leverage value close to 1 indicates:**
     A. Low influence
     B. High influence
     C. Average influence
     D. No influence

160. **The hat value (leverage) for observation i is denoted as:**
     A. hᵢ
     B. rᵢ
     C. eᵢ
     D. dᵢ

161. **Studentized residuals are:**
     A. Residuals divided by their standard error
     B. Residuals calculated by students
     C. Raw residuals
     D. Squared residuals

162. **Mahalanobis distance is used to identify:**
     A. Univariate outliers only
     B. Multivariate outliers
     C. Regression outliers only
     D. Time series outliers

163. **A robust regression method that is less sensitive to outliers is:**
     A. Ordinary least squares
     B. Weighted least squares
     C. M-estimation (Huber regression)
     D. Maximum likelihood

164. **The rule of thumb for Cook's distance suggests concern when D > :**
     A. 1
     B. 4/n (where n is sample size)
     C. 0.5
     D. 2

165. **Influential observations are problematic because they:**
     A. Increase sample size
     B. Can dramatically change regression results
     C. Always indicate errors
     D. Improve model fit

166. **A residual vs fitted plot can help identify:**
     A. Outliers in Y-direction
     B. High leverage points
     C. Multicollinearity
     D. Normality

167. **Which of the following is NOT a method for detecting outliers?**
     A. Z-score method
     B. IQR method
     C. Grubbs' test
     D. t-test

168. **The Z-score method considers observations outliers if |Z| > :**
     A. 1.96
     B. 2.5 or 3
     C. 1
     D. 0.05

169. **Winsorizing involves:**
     A. Removing outliers completely
     B. Replacing outliers with less extreme values
     C. Transforming all variables
     D. Adding more observations

170. **A point with high leverage but low residual is:**
     A. Not influential
     B. Highly influential
     C. An outlier
     D. An error in data

171. **The modified Z-score uses:**
     A. Mean and standard deviation
     B. Median and median absolute deviation (MAD)
     C. Mode and range
     D. Quartiles only

172. **Grubbs' test is used for:**
     A. Testing normality
     B. Detecting univariate outliers
     C. Testing homoscedasticity
     D. Model comparison

173. **When an observation has high Cook's distance, you should:**
     A. Automatically remove it
     B. Examine its influence on conclusions
     C. Keep it without question
     D. Transform the variables

174. **The Dixon Q-test is appropriate for:**
     A. Large samples only
     B. Small samples (n < 30)
     C. Categorical data
     D. Time series data

175. **Outliers in the context of time series data are often called:**
     A. Anomalies or changepoints
     B. Residuals
     C. Trends
     D. Seasonality