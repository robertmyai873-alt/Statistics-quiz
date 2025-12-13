exam-questions-gemini3

MODULE 1-4:


Here are 100 mock exam questions covering **Modules 1 through 4** (Probability, Sampling, Hypothesis Testing, and Correlation). These are designed based on the style of the Wooclap questions provided, the lecture transcripts, and the study guide concepts.

### **Module 1: Introduction & Probability**

1.  **Which distribution describes the probability of a specific number of "successes" in a fixed number of independent binary trials?**
    A. Normal Distribution
    B. T-Distribution
    C. Binomial Distribution
    D. Chi-Square Distribution

2.  **In R, which function prefix is used to generate random numbers from a specific distribution?**
    A. `d` (e.g., `dnorm`)
    B. `p` (e.g., `pnorm`)
    C. `q` (e.g., `qnorm`)
    D. `r` (e.g., `rnorm`)

3.  **The area under the curve of a probability density function must always sum to:**
    A. 0
    B. 0.5
    C. 1
    D. 100

4.  **What does the function `pnorm(1.96)` return in R?**
    A. The probability density at Z = 1.96
    B. The cumulative probability (area to the left) of Z = 1.96
    C. A random number from a normal distribution
    D. The Z-score corresponding to the 1.96th percentile

5.  **Which of the following describes a Normal Distribution?**
    A. It is discrete and bimodal.
    B. It is continuous, symmetric, and "bell-shaped."
    C. It is always skewed to the right.
    D. It describes binary outcomes only.

6.  **If you want to calculate the probability of getting exactly 4 heads in 10 coin flips, which R function should you use?**
    A. `rbinom(4, 10, 0.5)`
    B. `dbinom(4, 10, 0.5)`
    C. `pbinom(4, 10, 0.5)`
    D. `qbinom(4, 10, 0.5)`

7.  **In a standard normal distribution (Z-distribution), what are the mean ($\mu$) and standard deviation ($\sigma$)?**
    A. $\mu = 1, \sigma = 0$
    B. $\mu = 100, \sigma = 15$
    C. $\mu = 0, \sigma = 1$
    D. $\mu = 0, \sigma = 0$

8.  **Which distribution is typically used when testing hypotheses about categorical data or model comparison?**
    A. T-distribution
    B. F-distribution
    C. Binomial distribution
    D. Chi-square distribution

9.  **Skewness refers to:**
    A. The "peakedness" or flatness of a distribution.
    B. The measure of asymmetry of a distribution.
    C. The spread of the data around the mean.
    D. The number of modes in a distribution.

10. **What does the `set.seed(123)` function do in R?**
    A. It randomizes the order of your dataframe.
    B. It ensures that random number generation is reproducible.
    C. It installs the "seed" package.
    D. It calculates the standard error.

11. **The probability of an event occurring ranges between:**
    A. -1 and 1
    B. 0 and 1
    C. 0 and 100
    D. $-\infty$ and $+\infty$

12. **If a distribution has "heavy tails" (high kurtosis), it means:**
    A. There are more frequent extreme values (outliers) than in a normal distribution.
    B. The distribution is very flat.
    C. The distribution is skewed to the left.
    D. The mean is smaller than the median.

13. **Which function would you use to find the Z-score that corresponds to the top 5% of the normal distribution?**
    A. `dnorm(0.05)`
    B. `pnorm(0.95)`
    C. `qnorm(0.95)`
    D. `rnorm(0.95)`

14. **In the context of probability, an "elementary event" refers to:**
    A. An event that can be broken down into smaller parts.
    B. The entire sample space.
    C. A single outcome of an experiment (e.g., rolling a specific number on a die).
    D. The probability of zero.

15. **The F-distribution is most commonly associated with which statistical test?**
    A. T-test
    B. Correlation
    C. ANOVA (Analysis of Variance)
    D. Binomial test

16. **If you flip a fair coin 100 times, the expected number of heads is 50. If you observe 48 heads, the difference is likely due to:**
    A. Systemic bias
    B. Sampling error / Chance
    C. A Type I error
    D. Calculation error

17. **Which of the following is a *continuous* probability distribution?**
    A. Binomial distribution
    B. Normal distribution
    C. Poisson distribution
    D. Bernoulli distribution

18. **If you increase the standard deviation of a normal distribution, the curve becomes:**
    A. Taller and narrower
    B. Flatter and wider
    C. Skewed to the right
    D. Bimodal

19. **What is the `size` argument in the `dbinom(x, size, prob)` function?**
    A. The number of successes you are interested in.
    B. The probability of success.
    C. The total number of trials.
    D. The sample size of the population.

20. **Why do we use probability theory in statistics?**
    A. To prove that our data is correct.
    B. To calculate the exact population parameters.
    C. To estimate how likely our sample data is, given a specific hypothesis.
    D. To avoid doing math.

21. **In a normal distribution, approximately what percentage of data falls within $\pm 1$ standard deviation of the mean?**
    A. 50%
    B. 68%
    C. 95%
    D. 99.7%

22. **The "Law of Large Numbers" suggests that:**
    A. Larger samples will always have a normal distribution.
    B. As the number of trials increases, the sample mean gets closer to the expected value (population mean).
    C. You need at least 100 participants for any study.
    D. Smaller samples are more accurate.

23. **Which R package contains the `z.test` function used in the lectures?**
    A. `ggplot2`
    B. `stats`
    C. `BSDA`
    D. `psych`

24. **If a distribution is perfectly symmetric, the mean, median, and mode are:**
    A. All different
    B. All equal
    C. Equal to the standard deviation
    D. Equal to 1

25. **The sum of probabilities for all possible outcomes in a sample space is:**
    A. 0
    B. 0.5
    C. 1.0
    D. Infinite

---

### **Module 2: Sampling Theory**

26. **You want to study "all undergraduate students." You only have access to students at Tilburg University. The Tilburg students represent your:**
    A. Target Population
    B. Sample
    C. Parameter
    D. Sampling Frame

27. **Which sampling method gives every member of the population an equal chance of being selected?**
    A. Convenience Sampling
    B. Simple Random Sampling
    C. Snowball Sampling
    D. Quota Sampling

28. **A researcher stands outside the cafeteria and asks whoever walks by to answer a survey. This is an example of:**
    A. Stratified Sampling
    B. Random Sampling
    C. Opportunity/Convenience Sampling
    D. Systematic Sampling

29. **Snowball sampling is most useful when:**
    A. You want to avoid all bias.
    B. The population is very large and easy to access.
    C. The population is hard to reach (e.g., rare diseases, hidden communities).
    D. You want to ensure equal gender representation.

30. **Stratified sampling involves:**
    A. Dividing the population into subgroups (strata) and sampling proportionally from them.
    B. Sampling whoever is available.
    C. Asking participants to recruit their friends.
    D. Selecting every $n$-th person from a list.

31. **WEIRD samples, a common source of bias in psychology/CSAI research, stands for:**
    A. Western, Educated, Intelligent, Rich, Democratic
    B. Western, Educated, Industrialized, Rich, Democratic
    C. White, European, Industrialized, Rural, Dutch
    D. Western, European, Intellectual, Rich, Developed

32. **A "statistic" describes a \_\_\_\_\_\_\_, while a "parameter" describes a \_\_\_\_\_\_\_.**
    A. Population; Sample
    B. Sample; Population
    C. Mean; Standard Deviation
    D. Hypothesis; Result

33. **As the sample size ($N$) increases, the Standard Error of the Mean (SEM):**
    A. Increases
    B. Decreases
    C. Stays the same
    D. Becomes equal to the Standard Deviation

34. **The Central Limit Theorem states that as sample size increases, the sampling distribution of the mean will:**
    A. Approach a normal distribution, regardless of the population's shape.
    B. Become more skewed.
    C. Have a larger standard deviation.
    D. Identically match the population distribution.

35. **Which symbol represents the *population* mean?**
    A. $\bar{x}$ (x-bar)
    B. $s$
    C. $\mu$ (mu)
    D. $\sigma$ (sigma)

36. **Which symbol represents the *sample* standard deviation?**
    A. $\sigma$
    B. $\mu$
    C. $s$
    D. $\beta$

37. **The standard deviation of the sampling distribution of the mean is known as:**
    A. The Population Variance
    B. The Standard Error
    C. The Z-score
    D. The Confidence Interval

38. **A 95% Confidence Interval (CI) of [45, 55] means:**
    A. There is a 95% chance the sample mean is between 45 and 55.
    B. 95% of the data points lie between 45 and 55.
    C. If we replicated the study many times, 95% of the calculated intervals would contain the true population mean.
    D. The true mean is definitely 50.

39. **Sampling *without* replacement means:**
    A. Once an individual is selected, they are put back into the pool and can be selected again.
    B. Once an individual is selected, they cannot be selected again.
    C. You replace the participant with a different person if they drop out.
    D. You use a different sampling method halfway through.

40. **Which of the following scenarios is most likely to produce a *biased* sample for a study on "Global internet usage"?**
    A. Randomly selecting IP addresses from every country.
    B. Posting a survey link only on a VR gaming forum.
    C. Using a stratified sample based on continent population.
    D. Using a random digit dialer for phone numbers worldwide.

41. **If you replicate a study 20 times, how many of the 95% confidence intervals would you expect to *miss* (not include) the true population mean?**
    A. 0
    B. 1
    C. 5
    D. 10

42. **We use sample statistics to \_\_\_\_\_\_\_ population parameters.**
    A. Prove
    B. Define
    C. Estimate
    D. Correlate

43. **Standard Error is calculated as:**
    A. $SD / N$
    B. $SD / \sqrt{N}$
    C. $Mean / SD$
    D. $SD^2$

44. **What is the primary goal of inferential statistics in CSAI?**
    A. To describe the sample data perfectly.
    B. To use sample data to make generalizations about a population.
    C. To calculate the mean of a population directly.
    D. To eliminate all sampling error.

45. **Which R function was used in the lecture to calculate confidence intervals for the mean?**
    A. `meanCI()`
    B. `ciMean()` (from `lsr` package)
    C. `confint()`
    D. `get_CI()`

46. **If your sampling distribution of the mean is very wide (large standard error), it implies:**
    A. Your estimate of the population mean is very precise.
    B. Your sample size is likely very large.
    C. Your estimate of the population mean is imprecise.
    D. You made a calculation error.

47. **Bias in sampling occurs when:**
    A. The sample size is too small.
    B. The sample does not accurately reflect the characteristics of the population.
    C. You use random sampling.
    D. You calculate the mean instead of the median.

48. **If you increase your sample size from 50 to 500, the confidence interval will likely:**
    A. Become wider.
    B. Become narrower (more precise).
    C. Stay the same.
    D. Disappear.

49. **In the "Taco Literacy" example from the lecture, finding that 72% of 1000 people are taco illiterate vs 43% of 10,000 people suggests:**
    A. The first sample was likely biased or had high sampling error.
    B. Taco literacy decreased over time.
    C. The standard deviation increased.
    D. The population parameter changed.

50. **Which of the following is NOT a type of non-probability sampling?**
    A. Convenience Sampling
    B. Snowball Sampling
    C. Simple Random Sampling
    D. Volunteer Sampling

---

### **Module 3: Hypothesis Testing**

51. **The Null Hypothesis ($H_0$) usually states that:**
    A. There is a strong relationship between variables.
    B. There is no effect, no difference, or the relationship is zero in the population.
    C. The alternative hypothesis is false.
    D. The sample mean equals the sample median.

52. **A Type I error occurs when:**
    A. You reject the null hypothesis when it is actually true (False Positive).
    B. You fail to reject the null hypothesis when it is actually false (False Negative).
    C. Your sample size is too small.
    D. You use a T-test instead of a Z-test.

53. **A Type II error occurs when:**
    A. You reject the null hypothesis when it is true.
    B. You fail to reject the null hypothesis when there is actually a real effect (False Negative).
    C. The p-value is less than 0.05.
    D. The effect size is large.

54. **If your calculated p-value is 0.03 and your alpha level ($\alpha$) is 0.05, you should:**
    A. Fail to reject the null hypothesis.
    B. Reject the null hypothesis.
    C. Change your alpha level to 0.01.
    D. Conclude the null hypothesis is definitely true.

55. **Which test statistic should be used when the population standard deviation ($\sigma$) is *unknown*?**
    A. Z-statistic
    B. T-statistic
    C. F-statistic
    D. Chi-square statistic

56. **Cohen’s d is a measure of:**
    A. Statistical significance
    B. Effect size (standardized mean difference)
    C. Variance explained
    D. Sampling error

57. **A Cohen’s d of 0.8 is generally considered a:**
    A. Small effect
    B. Medium effect
    C. Large effect
    D. Trivial effect

58. **To calculate a p-value, you do NOT need to know:**
    A. The value of the test statistic
    B. The degrees of freedom (for t-tests)
    C. Whether the test is one-tailed or two-tailed
    D. The alpha level ($\alpha$)

59. **If you perform multiple statistical tests (e.g., 20 t-tests) on the same data, you increase the risk of:**
    A. Type II error
    B. Type I error (Family-wise error rate)
    C. Standard error
    D. Sampling bias

60. **Which correction is commonly used to control for the Family-Wise Error Rate when making multiple comparisons?**
    A. Pearson correction
    B. Bonferroni correction
    C. Spearman correction
    D. Gaussian correction

61. **Which of the following indicates the *strongest* evidence against the null hypothesis?**
    A. p = 0.05
    B. p = 0.50
    C. p = 0.001
    D. p = 0.10

62. **Statistical Power is defined as:**
    A. The probability of rejecting a false null hypothesis ($1 - \beta$).
    B. The probability of making a Type I error.
    C. The size of the effect.
    D. The standard deviation of the sampling distribution.

63. **In a two-tailed test with $\alpha = 0.05$, the critical region contains:**
    A. The top 5% of the distribution.
    B. The bottom 5% of the distribution.
    C. The extreme 2.5% on both ends of the distribution.
    D. The middle 95% of the distribution.

64. **Why do T-distributions have "heavier tails" than the Z-distribution?**
    A. Because they are skewed.
    B. To account for the extra uncertainty introduced by estimating the population SD from the sample.
    C. Because they are used for large sample sizes.
    D. Because they are used for binary data.

65. **Which R function performs a t-test?**
    A. `z.test()`
    B. `t.test()`
    C. `cor.test()`
    D. `lm()`

66. **If a 95% Confidence Interval for a mean difference includes 0 (e.g., [-2, 5]), what can you conclude?**
    A. The difference is statistically significant at p < 0.05.
    B. The difference is NOT statistically significant at p < 0.05.
    C. The effect size is large.
    D. You have made a Type I error.

67. **A hypothesis that predicts a specific direction (e.g., "Group A will score *higher* than Group B") requires a:**
    A. Two-tailed test
    B. One-tailed test
    C. Null test
    D. Bonferroni correction

68. **The "Alternative Hypothesis" ($H_1$) usually corresponds to:**
    A. The status quo.
    B. The research prediction (e.g., there IS an effect).
    C. A calculation error.
    D. The alpha level.

69. **Which package was used in the slides to calculate Cohen's d?**
    A. `ggplot2`
    B. `psych` (specifically `cohen.d`)
    C. `stats`
    D. `lsr`

70. **If you have a very large sample size, even very small effects can become:**
    A. Statistically significant
    B. Practically significant
    C. Non-significant
    D. Biased

71. **The threshold for statistical significance ($\alpha$) is typically set to:**
    A. 0.01
    B. 0.05
    C. 0.10
    D. 0.50

72. **The "p-value" represents:**
    A. The probability that the Null Hypothesis is true.
    B. The probability of obtaining the observed data (or more extreme) assuming the Null Hypothesis is true.
    C. The probability that the Alternative Hypothesis is true.
    D. The probability of making a Type I error.

73. **In the "Mad Men" example from the slides, the conclusion "Nope, just super drunk" implies:**
    A. The hypothesis was supported.
    B. The hypothesis was rejected (Null result).
    C. The correlation was 1.0.
    D. A Type I error occurred.

74. **When reporting a t-test, you should include:**
    A. The t-value
    B. The degrees of freedom
    C. The p-value
    D. All of the above

75. **If you run a Z-test in R using `BSDA::z.test`, you must calculate or know \_\_\_\_\_\_ beforehand.**
    A. The sample mean only.
    B. The population standard deviation ($\sigma$).
    C. The p-value.
    D. The correlation coefficient.

---

### **Module 4: Correlation**

76. **The Pearson correlation coefficient ($r$) ranges from:**
    A. 0 to 1
    B. -1 to 1
    C. -100 to 100
    D. $-\infty$ to $+\infty$

77. **If $r = -0.90$, this indicates:**
    A. A weak negative relationship.
    B. A strong positive relationship.
    C. A strong negative relationship.
    D. No relationship.

78. **Which of the following is TRUE about correlation?**
    A. Correlation implies causation.
    B. A correlation of 0 means there is definitely no relationship (linear or non-linear).
    C. Correlation measures the strength and direction of a linear relationship.
    D. Pearson's $r$ is robust to outliers.

79. **Covariance differs from correlation because:**
    A. Covariance is standardized.
    B. Covariance depends on the units of measurement of the variables.
    C. Covariance is always between -1 and 1.
    D. Covariance is used for ordinal data.

80. **To standardize covariance and turn it into a correlation coefficient, you divide it by:**
    A. The sample size ($N$).
    B. The product of the standard deviations of the two variables ($s_x s_y$).
    C. The mean of the variables.
    D. The variance of the variables.

81. **Calculating $r^2$ (the coefficient of determination) tells you:**
    A. The direction of the relationship.
    B. The proportion of variance in one variable shared/explained by the other.
    C. The statistical significance of the relationship.
    D. The causal effect.

82. **If data are ordinal (ranked) or contain outliers, which correlation coefficient is most appropriate?**
    A. Pearson's $r$
    B. Spearman's $\rho$ (rho)
    C. Point-biserial correlation
    D. Partial correlation

83. **A Partial Correlation between X and Y, controlling for Z, removes the influence of Z from:**
    A. Only X
    B. Only Y
    C. Both X and Y
    D. Neither

84. **A Semi-Partial Correlation between X and Y, controlling for Z, removes the influence of Z from:**
    A. Only one of the variables (usually the predictor/IV).
    B. Both X and Y.
    C. The outcome variable only.
    D. The error term only.

85. **In R, which function performs a correlation test and provides a p-value?**
    A. `cor()`
    B. `cor.test()`
    C. `cov()`
    D. `mean()`

86. **Which assumption is NOT required for Pearson’s correlation?**
    A. Linearity
    B. Interval or Ratio data
    C. Normality (for significance testing)
    D. Homogeneity of regression slopes

87. **"Spurious correlations" (like ice cream sales and shark attacks) usually occur due to:**
    A. A third variable (confounder) influencing both variables.
    B. Small sample sizes.
    C. Type II errors.
    D. Non-linear relationships.

88. **If you run `cor.test(x, y, alternative = "greater")`, you are testing:**
    A. A two-tailed hypothesis ($r \neq 0$).
    B. A one-tailed hypothesis that the correlation is positive ($r > 0$).
    C. A one-tailed hypothesis that the correlation is negative ($r < 0$).
    D. The null hypothesis that $r = 0$.

89. **What is the effect size of a correlation where $r = 0.10$?**
    A. Large
    B. Medium
    C. Small
    D. Zero

90. **Kendall’s tau ($\tau$) is generally preferred over Spearman’s rho when:**
    A. The sample size is small.
    B. The data is normally distributed.
    C. The sample size is very large.
    D. The data is ratio scale.

91. **In the lecture example about exam anxiety, exam performance, and revision time, a Partial correlation was used to:**
    A. See the relationship between Exam and Revision while controlling for Anxiety.
    B. See if Anxiety causes poor performance.
    C. Calculate the mean of the exam scores.
    D. Rank the students.

92. **Which R package contains the `pcor.test` function for partial correlations?**
    A. `stats`
    B. `ppcor`
    C. `psych`
    D. `lsr`

93. **If you see a correlation matrix where the diagonal values are all 1.0, this is because:**
    A. Every variable is perfectly correlated with itself.
    B. The calculation is wrong.
    C. The p-values are 1.0.
    D. There is multicollinearity.

94. **Which visual plot is best for checking the assumption of linearity before running a correlation?**
    A. Histogram
    B. Boxplot
    C. Scatterplot
    D. Bar chart

95. **If the covariance between two variables is 4.25, what can you definitely say about the relationship?**
    A. It is strong.
    B. It is weak.
    C. It is positive.
    D. It is statistically significant.

96. **In the "Guess the Correlation" game mentioned in class, a dispersed cloud of points with no clear slope indicates:**
    A. High positive correlation.
    B. High negative correlation.
    C. Correlation near 0.
    D. A calculation error.

97. **Can a correlation coefficient ever be greater than 1?**
    A. Yes, if the effect size is huge.
    B. No, it is mathematically impossible.
    C. Yes, if you use Spearman's rho.
    D. Yes, if you don't standardize.

98. **If variable X increases and variable Y decreases, the correlation is:**
    A. Positive
    B. Negative
    C. Zero
    D. Spurious

99. **Which R function allows you to calculate a correlation matrix for multiple variables at once?**
    A. `cor()`
    B. `t.test()`
    C. `mean()`
    D. `summary()`

100. **The `easystats` / `correlation` package mentioned in the slides is useful because:**
    A. It does the homework for you.
    B. It provides a convenient way to visualize and report complex correlation matrices.
    C. It only calculates Pearson correlations.
    D. It does not require R.


MODULES 4 - 8 


Here are 100 mock exam questions for Statistics for CSAI II, covering Modules 4–8, based on your study guide and provided materials. These questions are designed to mirror the conceptual and output-interpretation style of the Wooclap questions you have encountered.

-----

### **Module 4: Correlation**

**1. A researcher finds a covariance of 120 between variable X and Y. The standard deviation of X is 10 and the standard deviation of Y is 15. What is the Pearson correlation coefficient ($r$)?**

  * A. 0.80
  * B. 1.20
  * C. 0.12
  * D. 0.85

**2. Which of the following correlation coefficients indicates the strongest relationship?**

  * A. $r = 0.65$
  * B. $r = -0.72$
  * C. $r = 0.10$
  * D. $r = -0.05$

**3. You want to examine the relationship between `age` and `reaction_time` while controlling for the effect of `hours_slept` on both variables. Which type of correlation should you use?**

  * A. Semi-partial correlation
  * B. Point-biserial correlation
  * C. Partial correlation
  * D. Spearman's rank correlation

**4. A Spearman correlation is most appropriate when:**

  * A. The relationship between variables is linear and data are normally distributed.
  * B. The sample size is large (\>100) and data are ratio scale.
  * C. The data are ordinal (ranked) or the relationship is monotonic but non-linear.
  * D. You want to predict the exact value of Y from X.

**5. Which of the following is TRUE about the coefficient of determination ($R^2$) in a simple correlation context?**

  * A. It represents the percent of variance in one variable shared with the other.
  * B. It can be negative if the correlation is negative.
  * C. It is the square root of the correlation coefficient.
  * D. It tells you the direction of the relationship.

**6. If $r = 0.50$, how much variance in Variable Y is explained by Variable X?**

  * A. 50%
  * B. 5%
  * C. 25%
  * D. 100%

**7. Which R function would you use to calculate a correlation matrix for a data frame `df`?**

  * A. `summary(df)`
  * B. `cor(df)`
  * C. `lm(df)`
  * D. `t.test(df)`

**8. Interpreting Output:**

```r
> cor.test(df$stress, df$performance)

	Pearson's product-moment correlation

data:  df$stress and df$performance
t = -4.52, df = 98, p-value = 0.000017
alternative hypothesis: true correlation is not equal to 0
95 percent confidence interval:
 -0.584321 -0.239812
sample estimates:
      cor 
-0.4156 
```

**Based on the output above, which conclusion is correct?**

  * A. There is a significant positive relationship between stress and performance.
  * B. There is a significant negative relationship; as stress increases, performance tends to decrease.
  * C. The relationship is not statistically significant ($p > .05$).
  * D. Stress causes poor performance.

**9. What is the null hypothesis for a standard Pearson correlation test?**

  * A. $r = 1$
  * B. $r \neq 0$
  * C. $\rho = 0$ (The population correlation is zero)
  * D. $\mu_1 = \mu_2$

**10. Semi-partial correlation differs from partial correlation because:**

  * A. It controls for a third variable on *both* the predictor and criterion.
  * B. It controls for a third variable on *only* the predictor (or only the criterion), not both.
  * C. It is used only for non-parametric data.
  * D. It yields a higher value than the zero-order correlation.

**11. Which assumption is NOT required for Pearson correlation?**

  * A. Linearity
  * B. Normality of variables
  * C. Homoscedasticity
  * D. Multicollinearity

**12. You have a small sample size ($N=8$) and your data contains outliers. Which correlation coefficient is robust to outliers?**

  * A. Pearson's $r$
  * B. Spearman's $\rho$ (rho)
  * C. Point-biserial $r_{pb}$
  * D. $R^2$

**13. A correlation of $r = 0$ implies:**

  * A. No relationship exists between the variables.
  * B. No *linear* relationship exists between the variables.
  * C. The variables are independent.
  * D. The covariance is 1.

**14. If you run `cor.test()` and get a confidence interval of $[-0.10, 0.35]$, what can you conclude?**

  * A. The true correlation is likely 0.35.
  * B. The correlation is statistically significant.
  * C. The correlation is not statistically significant because the interval includes zero.
  * D. There is a strong negative relationship.

**15. Which library in R contains the `pcor()` function for partial correlations?**

  * A. `ggplot2`
  * B. `ppcor`
  * C. `stats`
  * D. `dplyr`

-----

### **Module 5: Intro to Regression (Simple Linear)**

**16. In the simple linear regression equation $Y_i = b_0 + b_1X_i + \epsilon_i$, what does $b_0$ represent?**

  * A. The slope of the line.
  * B. The residual error.
  * C. The Y-intercept (value of Y when X is 0).
  * D. The standardized coefficient.

**17. The method used to estimate regression coefficients by minimizing the sum of squared residuals is called:**

  * A. Maximum Likelihood Estimation.
  * B. Ordinary Least Squares (OLS).
  * C. Bayesian Estimation.
  * D. Standard Deviation Minimization.

**18. Interpreting Output:**

```r
Call:
lm(formula = exam_score ~ anxiety, data = students)

Coefficients:
(Intercept)      anxiety  
     85.00        -2.50  
```

**Based on this output, what is the predicted exam score for a student with an anxiety score of 4?**

  * A. 82.5
  * B. 75.0
  * C. 95.0
  * D. 85.0

**19. What is the residual ($e_i$) for a data point?**

  * A. The difference between the observed Y and the predicted Y ($\hat{Y}$).
  * B. The difference between the observed X and the mean of X.
  * C. The distance from the intercept to the data point.
  * D. The variance of the model.

**20. Which R code correctly runs a simple linear regression predicting `sales` from `adverts`?**

  * A. `lm(sales ~ adverts, data = df)`
  * B. `lm(adverts ~ sales, data = df)`
  * C. `cor(sales, adverts)`
  * D. `plot(sales, adverts)`

**21. In the output of `summary(model)`, the t-test associated with the slope ($b_1$) tests which null hypothesis?**

  * A. $b_1 = 1$
  * B. $b_1 = 0$
  * C. $b_0 = 0$
  * D. The model explains 0% of the variance.

**22. If the F-statistic in a simple regression is significant ($p < .05$), this means:**

  * A. The intercept is not zero.
  * B. The model explains significantly more variance than the intercept-only (mean) model.
  * C. The relationship is non-linear.
  * D. Homoscedasticity is met.

**23. Total Sum of Squares ($SS_T$) represents:**

  * A. The error in the regression model.
  * B. The improvement of the regression model over the mean.
  * C. The total variability in the outcome variable (difference from the mean).
  * D. The sum of the squared residuals.

**24. Which metric represents the average deviation of the residuals (in the units of the outcome variable)?**

  * A. $R^2$
  * B. F-statistic
  * C. Residual Standard Error (RSE)
  * D. Adjusted $R^2$

**25. If $SS_{Model} = 40$ and $SS_{Total} = 100$, what is $R^2$?**

  * A. 0.60
  * B. 0.40
  * C. 2.5
  * D. 4000

**26. Interpreting Output:**

````r
Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept)  10.000      2.000   5.000  0.001 ** hours_study   5.000      1.000   5.000  0.001 ** ```
**What is the 95% Confidence Interval for the slope of `hours_study` (approximate using $t \approx 2$)?**
* A. $[3.00, 7.00]$
* B. $[8.00, 12.00]$
* C. $[4.00, 6.00]$
* D. $[0.00, 10.00]$

**27. Standardized regression coefficients ($\beta$) allow you to:**
* A. Interpret the effect in raw units.
* B. Compare the strength of predictors measured on different scales.
* C. Ignore the intercept.
* D. Calculate the p-value manually.

**28. Which package in R is commonly used to obtain standardized coefficients (`std.beta`)?**
* A. `ggplot2`
* B. `effectsize` or `QuantPsyc`
* C. `readr`
* D. `tibble`

**29. In a plot of Fitted Values vs. Residuals, a "fan" shape indicates a violation of:**
* A. Linearity
* B. Independence
* C. Homoscedasticity
* D. Normality

**30. Why is the intercept sometimes meaningless in interpreting data?**
* A. Because it is always zero.
* B. Because a predictor value of 0 might be impossible or outside the range of data (e.g., age = 0).
* C. Because it has a large standard error.
* D. Because it is not a standardized coefficient.

---

### **Module 6: More Regression & Assumptions**

**31. Centering a predictor variable ($X_{centered} = X - \bar{X}$) changes which parameter in the regression model?**
* A. The slope ($b_1$)
* B. The residual standard error
* C. The intercept ($b_0$)
* D. The $R^2$

**32. After centering `age` to the mean, the intercept represents:**
* A. The predicted Y when age is 0.
* B. The predicted Y for a person with average age.
* C. The average age of the sample.
* D. The slope of age.

**33. Which diagnostic plot is best for checking the assumption of **Normality of Residuals**?**
* A. Residuals vs. Fitted
* B. Scale-Location
* C. Normal Q-Q Plot
* D. Cook’s Distance

**34. Influential data points that have a disproportionate impact on the regression line are best detected using:**
* A. The histogram of residuals.
* B. Cook’s Distance or Leverage vs. Residuals plot.
* C. The $R^2$ value.
* D. The F-statistic.

**35. If the **Linearity** assumption is violated, the Residuals vs. Fitted plot will look like:**
* A. A random cloud of points around 0.
* B. A distinct curve (e.g., U-shape).
* C. A funnel or fan shape.
* D. Points falling exactly on a straight line.

**36. The `gvlma()` function from the `gvlma` package performs:**
* A. A global validation of linear model assumptions.
* B. A generalized linear model analysis.
* C. A graphical visualization of linear models.
* D. A calculation of standardized betas.

**37. Interpreting Output:**
```R
> gvlma(model)
...
Global Stat        Value   p-value  Decision
                   12.5    0.012    Assumptions NOT satisfied!
````

**What does this output suggest?**

  * A. The model assumptions are acceptable.
  * B. At least one regression assumption has been significantly violated.
  * C. The model is a perfect fit.
  * D. You should proceed without changes.

**38. Which assumption cannot be checked just by looking at a plot of the model residuals?**

  * A. Normality
  * B. Linearity
  * C. Independence of observations
  * D. Homoscedasticity

**39. Independence of errors is usually violated when:**

  * A. The sample size is small.
  * B. Data are collected from the same subjects over time (repeated measures).
  * C. The variables are not normally distributed.
  * D. There are outliers.

**40. Using `check_model()` from the `performance` package generates:**

  * A. A summary table of coefficients.
  * B. A dashboard of visual plots checking various assumptions (collinearity, normality, etc.).
  * C. A new regression model with better fit.
  * D. The AIC score.

**41. `dfbeta` statistics are used to:**

  * A. Calculate degrees of freedom.
  * B. Assess how much regression coefficients would change if a specific case were removed.
  * C. Standardize the betas.
  * D. Test for heteroscedasticity.

**42. Interpreting Output (Dummy Coding):**

```r
Coefficients:
            Estimate 
(Intercept)    50.0 
groupTreatment 10.0
```

**If `groupControl` is the reference group (0) and `groupTreatment` is 1, what is the mean of the Treatment group?**

  * A. 10.0
  * B. 40.0
  * C. 50.0
  * D. 60.0

**43. In R, if you have a categorical variable `Status` with levels "Low", "Med", "High", how many dummy variables will `lm()` create automatically?**

  * A. 1
  * B. 2 ($k-1$)
  * C. 3
  * D. 0

**44. What does the `relevel()` function do?**

  * A. It removes outliers.
  * B. It changes the reference category for a factor variable.
  * C. It centers a continuous variable.
  * D. It runs a regression.

**45. Homoscedasticity means:**

  * A. The residuals are normally distributed.
  * B. The variance of the residuals is constant across all levels of the predicted values.
  * C. The predictor variables are uncorrelated.
  * D. The relationship is linear.

-----

### **Module 7: Multiple Regression & Assumptions**

**46. In the multiple regression equation $Y = b_0 + b_1X_1 + b_2X_2 + \dots$, $b_1$ is interpreted as:**

  * A. The correlation between Y and $X_1$.
  * B. The predicted change in Y for a 1-unit increase in $X_1$, holding all other predictors constant.
  * C. The predicted change in Y for a 1-unit increase in $X_1$, ignoring other predictors.
  * D. The standardized effect size.

**47. Why do we prefer Adjusted $R^2$ over Multiple $R^2$ in multiple regression?**

  * A. Adjusted $R^2$ is always higher.
  * B. Multiple $R^2$ increases with every predictor added, even useless ones; Adjusted $R^2$ penalizes model complexity.
  * C. Adjusted $R^2$ is easier to calculate.
  * D. Multiple $R^2$ cannot be interpreted as variance explained.

**48. Multicollinearity occurs when:**

  * A. The predictors are highly correlated with the outcome.
  * B. The predictors are highly correlated with each other.
  * C. The residuals are correlated with the fitted values.
  * D. The sample size is too small.

**49. A Variance Inflation Factor (VIF) value of 15 indicates:**

  * A. No collinearity.
  * B. Moderate collinearity.
  * C. Severe (high) multicollinearity.
  * D. Perfect independence.

**50. Interpreting Output:**

```r
Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   10.0      2.0      5.00   <.001
X1             3.0      0.5      6.00   <.001
X2             0.1      0.5      0.20    0.84
```

**Which conclusion is supported?**

  * A. Both predictors significantly predict the outcome.
  * B. $X_1$ is a significant predictor, but $X_2$ is not (controlling for $X_1$).
  * C. $X_2$ is a better predictor than $X_1$.
  * D. The intercept is not significant.

**51. Which R function compares two nested models to see if adding variables significantly improves fit?**

  * A. `summary()`
  * B. `anova(model1, model2)`
  * C. `cor.test()`
  * D. `plot()`

**52. When comparing non-nested models or checking model fit penalizing for complexity, which metric is best?**

  * A. $SS_{Total}$
  * B. AIC (Akaike Information Criterion) - lower is better.
  * C. F-statistic.
  * D. Pearson's r.

**53. Interpreting Output (Model Comparison):**

```r
Model 1: sales ~ adverts
Model 2: sales ~ adverts + airplay

  Res.Df    RSS Df Sum of Sq      F    Pr(>F)    
1    198 862264                                  
2    197 492362  1    369902  148.0  < 2.2e-16 ***
```

**What does this ANOVA table tell us?**

  * A. Model 1 is significantly better than Model 2.
  * B. Adding `airplay` (Model 2) significantly reduced the error (RSS) and improved model fit.
  * C. There is no significant difference between the models.
  * D. Model 2 explains less variance.

**54. Stepwise regression (e.g., backward elimination) is criticized because:**

  * A. It relies on p-values/AIC rather than theory, leading to overfitting and biased estimates.
  * B. It is computationally impossible in R.
  * C. It always yields the worst $R^2$.
  * D. It cannot handle categorical variables.

**55. Which command in R runs a multiple regression with all predictors in the dataframe?**

  * A. `lm(y ~ ., data = df)`
  * B. `lm(y ~ x, data = df)`
  * C. `lm(y ~ 1, data = df)`
  * D. `lm(y ~ all, data = df)`

**56. In a standard Spider Plot (radar chart) for model performance, usually:**

  * A. Points further out indicate better fit (for metrics where higher is better) or worse fit (depending on scaling). *(Note: Lectures suggest outer edges indicate better fit when appropriately scaled.)*
  * B. It only shows $R^2$.
  * C. It shows residuals.
  * D. It maps the linear relationship.

**57. If you add a predictor to a model and the $R^2$ goes up but the AIC also goes up (gets worse), this suggests:**

  * A. The new predictor is extremely important.
  * B. The new predictor does not justify the added complexity (it's overfitting).
  * C. The calculation is wrong.
  * D. The sample size is too large.

**58. What is the degrees of freedom for the model ($df_{mod}$) in a multiple regression with 3 predictors ($K=3$)?**

  * A. $N - 1$
  * B. 3
  * C. $N - 3 - 1$
  * D. 1

**59. If two predictors are perfectly correlated ($r = 1.0$), the regression model:**

  * A. Will work perfectly.
  * B. Will fail to estimate unique coefficients (singularity/error).
  * C. Will assign equal weights to both.
  * D. Will have an $R^2$ of 0.

**60. The "Hierarchical Entry" method in regression means:**

  * A. The computer decides the order.
  * B. You enter variables in blocks/steps based on theoretical grounds.
  * C. You enter all variables at once.
  * D. You only interpret the highest p-value.

-----

### **Module 8: Interactions**

**61. An interaction effect occurs when:**

  * A. Two predictors are highly correlated.
  * B. The effect of one predictor on the outcome depends on the level of another predictor.
  * C. The effect of X on Y is mediated by M.
  * D. The relationship between X and Y is non-linear.

**62. In the equation $Y = b_0 + b_1X + b_2Z + b_3(X \times Z)$, what does $b_3$ represent?**

  * A. The main effect of X.
  * B. The main effect of Z.
  * C. The interaction effect (change in slope of X given Z).
  * D. The intercept.

**63. How do you specify an interaction between `age` and `education` in an R formula?**

  * A. `age + education`
  * B. `age * education` (or `age + education + age:education`)
  * C. `age / education`
  * D. `age - education`

**64. Interpreting Output:**

```r
Coefficients:
                Estimate Std. Error t value Pr(>|t|)
(Intercept)        50.0      5.0     10.0   <.001
stress             -2.0      0.5     -4.0   <.001
support             3.0      0.5      6.0   <.001
stress:support      0.5      0.1      5.0   <.001
```

**The interaction term is positive ($0.5$). This suggests that as social `support` increases:**

  * A. The negative effect of `stress` on the outcome becomes *weaker* (less negative/more positive).
  * B. The negative effect of `stress` becomes *stronger* (more negative).
  * C. There is no effect of stress.
  * D. Support decreases the outcome.

**65. When an interaction is significant, how should you interpret the "main effects" ($b_1, b_2$)?**

  * A. As global averages that apply to everyone.
  * B. As conditional effects (simple slopes) when the *other* predictor is 0.
  * C. They should be ignored completely.
  * D. They are now standardized.

**66. What is a "Simple Slopes Analysis"?**

  * A. Running a regression with only one variable.
  * B. Probing an interaction by examining the slope of X at specific levels of Z (e.g., -1 SD, Mean, +1 SD).
  * C. Plotting the residuals.
  * D. Calculating the simple mean.

**67. In R, which package is commonly used to probe and plot interactions (e.g., `sim_slopes` or `interact_plot`)?**

  * A. `interactions` or `jtools`
  * B. `gvlma`
  * C. `MASS`
  * D. `base`

**68. If the lines in an interaction plot are parallel, it indicates:**

  * A. A strong interaction.
  * B. No interaction.
  * C. A crossover interaction.
  * D. Multicollinearity.

**69. Why is centering continuous predictors recommended when testing interactions?**

  * A. It turns the variables into categorical ones.
  * B. It reduces multicollinearity between the main effects and the interaction term, and makes the main effects interpretable (effect at the mean).
  * C. It increases the sample size.
  * D. It ensures normality.

**70. Interpreting Output (Visual):**
*(Imagine a plot where the slope of X on Y is positive for the "High Z" group, flat for "Medium Z", and negative for "Low Z".)*
**This is an example of:**

  * A. A spurious correlation.
  * B. A crossover (disordinal) or significant interaction where the direction of effect changes.
  * C. Homoscedasticity.
  * D. A main effect only.

**71. To decompose an interaction involving a categorical variable (e.g., `Treatment` vs `Control`) and a continuous variable (`Dose`), you would look at:**

  * A. The slope of `Dose` for the Treatment group vs. the slope of `Dose` for the Control group.
  * B. The mean of Dose.
  * C. The correlation between Treatment and Control.
  * D. The intercept only.

**72. The term for breaking down an interaction into its lower-order components is:**

  * A. Decompose.
  * B. Standardize.
  * C. Bootstrap.
  * D. Inflate.

**73. If you have a significant interaction, do you need to keep the main effects in the model?**

  * A. No, remove them to save degrees of freedom.
  * B. Yes, for hierarchical, marginality, and interpretability reasons.
  * C. Only if they are significant.
  * D. Only the intercept matters.

**74. Using the `emmeans` package helps you to:**

  * A. Calculate Estimated Marginal Means and compare simple slopes.
  * B. Calculate the mean of the residuals.
  * C. Run a stepwise regression.
  * D. Create dummy variables.

**75. "Johnson-Neyman" intervals are used to:**

  * A. Find the specific range of the moderator Z where the slope of X is significant.
  * B. Detect outliers.
  * C. Calculate VIF.
  * D. Normalize the data.

-----

### **General R & Concept Application (Modules 4-8)**

**76. Which R code creates a centered variable `age_c`?**

  * A. `df$age_c <- df$age - mean(df$age)`
  * B. `df$age_c <- mean(df$age)`
  * C. `df$age_c <- scale(df$age)` (Note: `scale` standardizes by default, not just centering).
  * D. `df$age_c <- df$age / sd(df$age)`

**77. `confint(model)` in R provides:**

  * A. The confidence intervals for the predicted values.
  * B. The confidence intervals for the regression coefficients ($b$).
  * C. The correlation matrix.
  * D. The R-squared value.

**78. When reporting multiple regression results, which statistics are essential?**

  * A. $b$ (or $\beta$), SE, t, p, and model $R^2$/F.
  * B. Only the p-values.
  * C. Only the $R^2$.
  * D. The raw data frame.

**79. True or False: Correlation implies Causation.**

  * A. True
  * B. False

**80. Which plot is used to detect outliers based on leverage and residuals?**

  * A. Residuals vs Leverage (Cook's distance lines).
  * B. Histogram of outcome.
  * C. Boxplot of predictors.
  * D. Scatterplot of X vs Y.

**81. If `lm()` output shows `NA` for a coefficient, it usually means:**

  * A. The variable had no effect.
  * B. Perfect multicollinearity (singularity); the variable provides redundant information.
  * C. The variable is categorical.
  * D. The sample size is too big.

**82. Interpreting `summary()`:** The bottom line says `F-statistic: 50 on 2 and 97 DF, p-value: < 2.2e-16`.
**What does the `2 and 97 DF` refer to?**

  * A. 2 predictors ($df_{mod}$) and 97 residual degrees of freedom ($N-K-1$).
  * B. 2 observations and 97 variables.
  * C. 2 models compared.
  * D. An error in calculation.

**83. How do you interpret a standardized intercept?**

  * A. The value of Y when all predictors are at their mean (0).
  * B. It is always 0.
  * C. It represents the correlation.
  * D. It is the mean of Y.

**84. In `ggplot2`, adding a regression line to a scatterplot is done with:**

  * A. `geom_smooth(method = "lm")`
  * B. `geom_line()`
  * C. `geom_bar()`
  * D. `geom_boxplot()`

**85. A researcher reports: "$b = 0.5, t(100) = 1.5, p = .14$". What is the conclusion?**

  * A. The effect is significant.
  * B. The effect is not statistically significant.
  * C. The sample size is too small.
  * D. There is a strong relationship.

**86. If you run a regression and the residuals are not normally distributed, what might you consider?**

  * A. Bootstrapping or transforming the dependent variable (e.g., log transformation).
  * B. Using a t-test instead.
  * C. Ignoring it; regression is robust.
  * D. Increasing the number of predictors.

**87. Which of the following is a measure of effect size in regression?**

  * A. p-value
  * B. $f^2$ (Cohen's $f^2$) or $R^2$.
  * C. Degrees of freedom.
  * D. The intercept.

**88. Parsimony in model building means:**

  * A. Adding as many variables as possible.
  * B. Choosing the simplest model that explains the data well (e.g., lower AIC).
  * C. Maximizing $R^2$ at all costs.
  * D. Using complex interactions.

**89. If you calculate `AIC` for Model A = 200 and Model B = 195, which model is preferred?**

  * A. Model A
  * B. Model B
  * C. Neither
  * D. They are equivalent.

**90. Interpreting Output:**

```r
> vif(model)
      age    income 
 1.02345   1.05432
```

**Is multicollinearity a problem here?**

  * A. Yes, values are \> 1.
  * B. No, values are well below 5 or 10.
  * C. Yes, because they are not equal.
  * D. Cannot tell.

**91. To visualize a 3D regression plane (2 predictors, 1 outcome) in R, which packages were mentioned/useful?**

  * A. `scatterplot3d` or `rgl` (though 3D plots are often hard to interpret).
  * B. `dplyr`
  * C. `tidyr`
  * D. `stringr`

**92. If you want to predict an outcome Y based on Group (A, B, C), and "A" is the reference, the coefficient for "B" represents:**

  * A. The mean of group B.
  * B. The difference between mean of B and mean of A.
  * C. The difference between B and C.
  * D. The average of all groups.

**93. What is the range of values for $R^2$?**

  * A. $-\infty$ to $+\infty$
  * B. -1 to 1
  * C. 0 to 1
  * D. 0 to 100

**94. What is the correct syntax to extract coefficients from a saved model object `fit`?**

  * A. `fit$coefficients` or `coef(fit)`
  * B. `fit$residuals`
  * C. `fit$r.squared`
  * D. `fit$p.value`

**95. A "suppressor variable" in multiple regression is one that:**

  * A. Has no correlation with the criterion but increases the $R^2$ by suppressing variance in another predictor.
  * B. Decreases the $R^2$.
  * C. Is an outlier.
  * D. Violates assumptions.

**96. If you have 5 predictors and $N=20$, you likely have:**

  * A. High statistical power.
  * B. Overfitting / poor power (rule of thumb is usually 10-15 participants per predictor).
  * C. A perfect model.
  * D. Multicollinearity.

**97. In a report, you write: "$F(2, 147) = 4.56, p = .012$". What does the "2" represent?**

  * A. Sample size.
  * B. Regression degrees of freedom ($K$, number of predictors).
  * C. Residual degrees of freedom.
  * D. The intercept.

**98. To compare the relative importance of predictors in a model, you should look at:**

  * A. Unstandardized $b$ coefficients.
  * B. Standardized $\beta$ coefficients.
  * C. The p-values only.
  * D. The standard errors.

**99. If you perform a `log` transformation on Y, the relationship being modeled changes from linear to:**

  * A. Quadratic.
  * B. Exponential/Multiplicative.
  * C. Logistic.
  * D. Cubic.

\*\*100. **Mock R Output - Final Synthesis:**

````r
Call:
lm(formula = sales ~ price * quality, data = products)

Coefficients:
              Estimate Std. Error t value Pr(>|t|)    
(Intercept)    50.00       5.00    10.00   <2e-16 ***
price          -2.00       0.50    -4.00   1e-04 ***
quality         5.00       1.00     5.00   2e-05 ***
price:quality   0.20       0.10     2.00   0.048 * ```
**Which statement is the most accurate interpretation?**
* A. Price decreases sales, Quality increases sales, and high Quality *buffers* (reduces) the negative effect of Price on Sales (because the interaction is positive).
* B. Price decreases sales, but Quality has no effect.
* C. The interaction is not significant ($p > .05$).
* D. Price increases sales when Quality is 0.

---

### **Answer Key**

1.  A ($r = \frac{cov(X,Y)}{sd(X)sd(Y)} = \frac{120}{10 \times 15} = \frac{120}{150} = 0.8$)
2.  B (Magnitude $|-0.72| = 0.72$ is the highest)
3.  C
4.  C
5.  A
6.  C ($0.50^2 = 0.25$)
7.  B
8.  B
9.  C
10. B
11. D
12. B
13. B
14. C
15. B
16. C (The intercept b_0 represents the predicted value of Y when X is 0.)
17. B
18. B ($85 + (-2.5 \times 4) = 75$)
19. A
20. A
21. B
22. B
23. C
24. C
25. B ($40/100$)
26. A ($5 \pm 2(1)$)
27. B
28. B
29. C
30. B
31. C
32. B
33. C
34. B
35. B
36. A
37. B
38. C (Need to know study design)
39. B
40. B
41. B
42. D ($Intercept + Slope = 50 + 10 = 60$)
43. B (3 levels - 1 = 2 dummies)
44. B
45. B
46. B
47. B
48. B
49. C
50. B
51. B
52. B
53. B
54. A
55. A
56. A
57. B
58. B
59. B
60. B
61. B
62. C
63. B
64. A (Slope of stress is -2. As support goes up, we add $0.5 \times Support$ to the slope. $-2 + 0.5 = -1.5$, which is less negative.)
65. B
66. B
67. A
68. B
69. B
70. B
71. A
72. A
73. B
74. A
75. A
76. A
77. B
78. A
79. B
80. A
81. B
82. A
83. A
84. A
85. B
86. A
87. B
88. B
89. B
90. B
91. A
92. B
93. C
94. A
95. A
96. B
97. B
98. B
99. B
100. A (Main effect price is -2. Interaction is +0.2. As quality increases, slope of price becomes $-2 + 0.2(\text{Quality})$, i.e., less negative/closer to zero.)
````


MODULES 9-13 

Based on the lecture slides, transcripts, and study guides for Modules 10 through 13 of "Statistics for CSAI II," here are 100 mock exam questions. These questions focus heavily on interpreting R output, model comparison, and conceptual understanding of polynomial regression, mixed models, and growth curve modeling.

-----

### **Module 10: Multiple Regression with Polynomials**

**Concept: Polynomial Terms & Shapes**

1.  **Question:** You hypothesize that the relationship between "Hours of Sleep" and "Cognitive Performance" follows an inverted U-shape (performance increases with sleep up to a point, then decreases). Which polynomial term must be included in your regression model to test this specific shape?

      * A) First-order (Linear) only
      * B) Second-order (Quadratic)
      * C) Third-order (Cubic)
      * D) Fourth-order (Quartic)
      * **Answer:** B (An inverted U-shape is modeled with a negative quadratic term.)

2.  **Question:** A cubic polynomial function ($y = ax^3 + bx^2 + cx + d$) allows for how many points of inflection in the regression line?

      * A) 0
      * B) 1
      * C) 2
      * D) 3
      * **Answer:** C (A cubic polynomial has degree 3, allowing for up to 2 inflection points.)

3.  **Question:** When including a quadratic term (`I(x^2)`) in a linear model in R, what other term *must* generally be included for the model coefficients to be chemically/mathematically interpretable?

      * A) The cubic term (`I(x^3)`)
      * B) The lower-order linear term (`x`)
      * C) An interaction term
      * D) A random intercept
      * **Answer:** B (When including a higher-order term like x^2, the lower-order term x must be included to maintain hierarchical structure.)

**Concept: Interpreting R Output (Polynomials)**

4.  **Question:** **[Mock R Output]**

    ```text
    Call:
    lm(formula = happiness ~ chocolate + I(chocolate^2), data = diet_data)

    Coefficients:
    (Intercept)      chocolate  I(chocolate^2)
         10.50           2.30           -0.15
    ```

    Based on the sign of the quadratic term (`I(chocolate^2)`), how would you describe the shape of the relationship?

      * A) U-shaped (Convex; happiness decreases then increases)
      * B) Inverted U-shaped (Concave; happiness increases then decreases)
      * C) Linear positive
      * D) Linear negative
      * **Answer:** B (Negative quadratic coefficient indicates a downward-opening curve).

5.  **Question:** In the output from the previous question, if the coefficient for `I(chocolate^2)` were **positive** (e.g., +0.15), what would the curve look like?

      * A) It opens downward (Inverted U).
      * B) It opens upward (U-shaped).
      * C) An S-curve.
      * D) A straight line.
      * **Answer:** B (A positive quadratic coefficient results in a U-shaped (convex) curve.)

6.  **Question:** **[Mock R Output]**

    ```text
    Coefficients:
                    Estimate Std. Error t value Pr(>|t|)
    (Intercept)      50.00     5.00    10.00  < 2e-16 ***
    Time              5.00     1.00     5.00  1.2e-05 ***
    I(Time^2)         0.50     0.20     2.50   0.015 *
    ```

    True or False: The quadratic trend is statistically significant at the $\alpha = 0.05$ level.

      * A) True
      * B) False
      * **Answer:** A (p-value 0.015 \< 0.05).

**Concept: Multicollinearity & Orthogonal Polynomials**

7.  **Question:** What is a primary statistical issue often encountered when adding raw polynomial terms (e.g., $x$, $x^2$, $x^3$) to a regression model?

      * A) Heteroscedasticity
      * B) Multicollinearity (high correlation between terms)
      * C) Non-normality of residuals
      * D) Autocorrelation
      * **Answer:** B (Raw polynomials are highly correlated with each other, causing multicollinearity.)

8.  **Question:** Which R function creates **orthogonal polynomials** to reduce multicollinearity between polynomial terms?

      * A) `ortho()`
      * B) `I()`
      * C) `poly()`
      * D) `scale()`
      * **Answer:** C (The poly() function generates orthogonal polynomials by default.)

9.  **Question:** True or False: Using orthogonal polynomials (e.g., `poly(x, 2)`) changes the overall fit ($R^2$) of the model compared to using raw polynomials (`x + I(x^2)`).

      * A) True
      * B) False
      * **Answer:** B (The overall fit remains the same; only the coefficients and their correlations change).

10. **Question:** **[Mock R Output]**

    ```text
    Call: lm(formula = y ~ poly(x, 2), data = df)
    ...
    Coefficients:
                Estimate Std. Error t value Pr(>|t|)
    (Intercept)  20.00     0.50     40.00  <2e-16
    poly(x, 2)1   5.00     1.00      5.00  <2e-16
    poly(x, 2)2  -3.00     1.00     -3.00   0.004
    ```

    If you used raw polynomials instead of `poly(x, 2)`, which value in this output would definitively remain the exact same?

      * A) The estimate for `poly(x, 2)1`
      * B) The estimate for `poly(x, 2)2`
      * C) The t-value for the intercept
      * D) The $R^2$ of the model (not shown, but implied as a property)
      * **Answer:** D (Coefficients change, but the variance explained ($R^2$) and overall model fit do not).

**Concept: Model Comparison (Polynomials)**

11. **Question:** You run a linear model (`m1`) and a quadratic model (`m2`). You compare them using `anova(m1, m2)`.
    **[Mock R Output]**

    ```text
    Model 1: y ~ x
    Model 2: y ~ x + I(x^2)
      Res.Df    RSS Df Sum of Sq      F    Pr(>F)
    1     98 1500.0
    2     97 1200.0  1     300.0  24.25 3.5e-06 ***
    ```

    Which model should you choose based on this output?

      * A) Model 1 (Linear)
      * B) Model 2 (Quadratic)
      * C) Neither fits well
      * D) Not enough information
      * **Answer:** B (The reduction in RSS is significant, p \< .001).

12. **Question:** If the p-value in the ANOVA table comparing a linear and quadratic model was **0.35**, what would you conclude?

      * A) The quadratic term significantly improves model fit.
      * B) The quadratic term does not significantly improve model fit; stick with the linear model.
      * C) The linear term is not significant.
      * D) You should try a cubic model.
      * **Answer:** B

**Concept: Theory vs. Data**

13. **Question:** "Empirically" deciding to use polynomial regression usually involves inspecting which plot for curve-like patterns?

      * A) Histogram of the outcome
      * B) Residuals vs. Fitted values plot
      * C) Boxplot of the predictor
      * D) Correlation matrix
      * **Answer:** B (Residuals vs. Fitted values plots reveal non-linear patterns if a polynomial term is needed.)

14. **Question:** Which is **NOT** a valid reason/use case for polynomial regression?

      * A) Theoretical prediction of a curve (e.g., Yerkes-Dodson).
      * B) Residual plots show a non-linear pattern.
      * C) To extrapolate predictions far outside the observed range of data (forecasting).
      * D) To account for non-linear trends within the range of your data.
      * **Answer:** C (Polynomials are notoriously bad at extrapolating outside observed data).

-----

### **Module 11: Mixed Models**

**Concept: Fixed vs. Random Effects**

15. **Question:** In a mixed model, what distinguishes a **fixed effect** from a **random effect**?

      * A) Fixed effects vary by subject; random effects are constant.
      * B) Fixed effects estimate population-level parameters; random effects estimate variance/deviations around that mean for specific groups.
      * C) Fixed effects are for categorical variables; random effects are for continuous variables.
      * D) Fixed effects are optional; random effects are mandatory.
      * **Answer:** B (Fixed effects estimate population means; random effects estimate subject-specific deviations.)

16. **Question:** Which of the following is a classic example of a variable often treated as a **random effect** in a Repeated Measures design?

      * A) Treatment condition (Control vs. Experimental)
      * B) Participant/Subject ID
      * C) Age of participant
      * D) Gender
      * **Answer:** B

17. **Question:** Why do we use Mixed Models instead of standard Multiple Regression for nested data?

      * A) To violate the assumption of linearity.
      * B) To account for non-independence of observations (clustering).
      * C) To calculate easier p-values.
      * D) Because standard regression cannot handle continuous predictors.
      * **Answer:** B (Mixed models account for the correlation of residuals within groups/subjects.)

**Concept: R Syntax (lme4)**

18. **Question:** Which R package is primarily used for running linear mixed-effects models (`lmer`)?

      * A) `ggplot2`
      * B) `dplyr`
      * C) `lme4`
      * D) `stats`
      * **Answer:** C (lme4 is the standard package for linear mixed-effects models in R.)

19. **Question:** What is the correct syntax for a random intercept for `Subject` in an `lmer` formula?

      * A) `(Subject | 1)`
      * B) `(1 | Subject)`
      * C) `random = Subject`
      * D) `(1 + Subject)`
      * **Answer:** B (The pipe | separates the random term from the grouping variable.)

20. **Question:** How would you specify a model with a fixed effect for `Condition`, a random intercept for `Subject`, AND a random slope for `Condition` by `Subject`?

      * A) `y ~ Condition + (1 | Subject)`
      * B) `y ~ Condition + (Condition | Subject)`
      * C) `y ~ Condition + (1 | Subject) + (1 | Condition)`
      * D) `y ~ Condition + (0 | Subject)`
      * **Answer:** B (Note: `(Condition | Subject)` implicitly includes the intercept `1 + Condition`).

21. **Question:** What does the term `(1 | School/Class)` imply in a mixed model formula?

      * A) Random intercepts for School only.
      * B) Random intercepts for Class only.
      * C) Nested random effects: Classes nested within Schools.
      * D) Crossed random effects between School and Class.
      * **Answer:** C (The slash / denotes nesting: Classes within Schools.)

**Concept: Interpreting Mixed Model Output**

22. **Question:** **[Mock R Output]**

    ```text
    Random effects:
     Groups   Name        Variance Std.Dev.
     Subject  (Intercept) 400.0    20.0
     Residual             100.0    10.0
    Number of obs: 200, groups:  Subject, 20
    ```

    Calculate the Intraclass Correlation Coefficient (ICC).

      * A) 0.20
      * B) 0.80
      * C) 4.00
      * D) 0.25
      * **Answer:** B (Calculation: $\frac{400}{400 + 100} = 0.80$).

23. **Question:** What does an ICC of 0.80 (from the previous question) indicate?

      * A) 80% of the variance in the outcome is due to differences *between* subjects.
      * B) 80% of the variance is due to measurement error (residual).
      * C) The subjects are not correlated.
      * D) You should definitely use a simple linear regression.
      * **Answer:** A (ICC is the proportion of total variance explained by the grouping structure (between-group variance).)

24. **Question:** **[Mock R Output]**

    ```text
    Fixed effects:
                Estimate Std. Error t value
    (Intercept)  250.00    10.00     25.00
    Day           10.00     2.00      5.00
    ```

    What is the predicted value of the outcome for `Day = 0` (the intercept) for the *average* subject (ignoring random deviations)?

      * A) 10.00
      * B) 250.00
      * C) 260.00
      * D) 25.00
      * **Answer:** B (The Intercept (250.00) represents the value when Day=0.)

25. **Question:** In the output above (\#24), what is the estimated change in the outcome for every 1-unit increase in Day?

      * A) 250.00
      * B) 25.00
      * C) 10.00
      * D) 2.00
      * **Answer:** C (The slope for Day (10.00) represents the change per unit of time.)

26. **Question:** **[Mock R Output]**

    ```text
    Random effects:
     Groups   Name        Variance Std.Dev. Corr
     Subject  (Intercept) 500.0    22.36
              Day          50.0     7.07    -0.50
    ```

    What does the correlation of -0.50 tell you?

      * A) Subjects with higher baseline intercepts tend to have steeper positive slopes.
      * B) Subjects with higher baseline intercepts tend to have lower/more negative slopes.
      * C) The model did not converge.
      * D) Day is negatively correlated with the outcome.
      * **Answer:** B (Negative correlation between Intercept and Slope).

27. **Question:** Ideally, if you add a fixed predictor to a mixed model that explains a lot of variance in the outcome, what should happen to the **Random Intercept Variance** (compared to the empty/null model)?

      * A) It should increase.
      * B) It should stay exactly the same.
      * C) It should decrease (variance is "explained away").
      * D) It should become negative.
      * **Answer:** C (Adding a significant predictor explains variance, reducing the unexplained random variance.)

**Concept: Model Fit & Issues**

28. **Question:** Which estimation method is generally preferred when comparing nested mixed models with **different fixed effects** using a Likelihood Ratio Test?

      * A) REML (Restricted Maximum Likelihood)
      * B) ML (Maximum Likelihood)
      * C) OLS (Ordinary Least Squares)
      * D) T-test
      * **Answer:** B (REML is better for final parameter estimates, ML for comparing fixed effects).

29. **Question:** If you see the warning "Singular fit" in R output for an `lmer` model, what does it usually mean?

      * A) The model fits the data perfectly (R^2 = 1).
      * B) The random effects structure is too complex for the data (e.g., variance near 0 or -1/1 correlation).
      * C) You have too many outliers.
      * D) You should add more random slopes.
      * **Answer:** B (Singular fit means the model is overparameterized, often with random variance near zero.)

30. **Question:** What is $R^2_{marginal}$ in the context of mixed models?

      * A) Variance explained by the entire model (fixed + random).
      * B) Variance explained by the fixed effects only.
      * C) Variance explained by the random effects only.
      * D) The error variance.
      * **Answer:** B (Marginal R-squared includes variance explained by fixed effects only.)

31. **Question:** What is $R^2_{conditional}$?

      * A) Variance explained by the fixed effects only.
      * B) Variance explained by the entire model (fixed + random effects).
      * C) The p-value of the model.
      * D) The correlation between random slopes and intercepts.
      * **Answer:** B (Conditional R-squared includes variance explained by both fixed and random effects.)

32. **Question:** **[Mock R Output - Model Comparison]**

    ```text
          Df    AIC    BIC  logLik deviance  Chisq Chi Df Pr(>Chisq)
    mod1   4 1200.0 1220.0 -596.0   1192.0
    mod2   5 1150.0 1175.0 -570.0   1140.0  52.0      1  5e-13 ***
    ```

    Which model is preferred based on this output?

      * A) mod1 (fewer degrees of freedom).
      * B) mod1 (higher AIC).
      * C) mod2 (lower AIC and significant Likelihood Ratio Test).
      * D) Neither, they are statistically equivalent.
      * **Answer:** C (Mod2 has a lower AIC and a significant LRT result, indicating better fit.)

33. **Question:** Why do we typically use the `lmerTest` package in addition to `lme4`?

      * A) To make better plots.
      * B) To get p-values for the fixed effects output.
      * C) To run Bayesian models.
      * D) To handle missing data.
      * **Answer:** B (lmerTest extends lme4 to provide p-values for t-tests.)

-----

### **Module 12: Growth Curve Modeling**

**Concept: Basics & Syntax**

34. **Question:** A Growth Curve Model (GCM) is essentially a special case of which type of model?

      * A) ANOVA
      * B) Mixed-Effects Model (Multilevel Model)
      * C) Chi-Square Test
      * D) Logistic Regression
      * **Answer:** B (Growth Curve Models are Multilevel Models applied to longitudinal data.)

35. **Question:** What is the defining feature of the data required for Growth Curve Modeling?

      * A) It must be categorical.
      * B) It must be cross-sectional (one time point).
      * C) It must be longitudinal (repeated measures over time).
      * D) It must have no missing values.
      * **Answer:** C (Growth models require repeated measures (longitudinal data).)

36. **Question:** In an **Unconditional Growth Model**, what is typically the only fixed predictor included?

      * A) Treatment Group
      * B) Time
      * C) Gender
      * D) Nothing (only the intercept)
      * **Answer:** B (Unconditional growth models include Time to model the trajectory but no other predictors.)

37. **Question:** What does a "Conditional" Growth Model include that an Unconditional one does not?

      * A) Random intercepts.
      * B) A time variable.
      * C) Covariates or predictors of interest (e.g., Treatment Group) to explain differences in growth patterns.
      * D) Error terms.
      * **Answer:** C (Conditional models includes predictors (covariates) to explain variability in intercepts or slopes.)

38. **Question:** If you want to model a non-linear trajectory over time in a GCM, what do you usually add?

      * A) More subjects.
      * B) Polynomial terms for Time (e.g., $Time^2$, $Time^3$).
      * C) More random effects.
      * D) A control group.
      * **Answer:** B (Polynomial terms like Time^2 allow for modeling non-linear curves.)

**Concept: Interpreting GCM Output**

39. **Question:** **[Mock R Output]**

    ```text
    Fixed effects:
                Estimate Std. Error t value
    (Intercept)  100.00     2.00     50.00
    Time           5.00     0.50     10.00
    GroupB        10.00     3.00      3.33
    Time:GroupB   -2.00     0.70     -2.85
    ```

    The reference group is Group A. What is the slope (rate of growth) for **Group A**?

      * A) 100.00
      * B) 5.00
      * C) 3.00
      * D) -2.00
      * **Answer:** B (The main effect of Time represents the slope for the reference group).

40. **Question:** Using the output from Question \#39, what is the slope (rate of growth) for **Group B**?

      * A) 5.00
      * B) 10.00
      * C) 3.00 (5.00 - 2.00)
      * D) 7.00 (10.00 - 3.00)
      * **Answer:** C (Slope A + Interaction term = 5.00 + (-2.00) = 3.00).

41. **Question:** Using the output from Question \#39, how do the intercepts differ between Group A and Group B?

      * A) They don't differ.
      * B) Group B starts 10.00 units higher than Group A.
      * C) Group B starts 2.00 units lower.
      * D) Group B starts 5.00 units higher.
      * **Answer:** B (The main effect of GroupB represents the difference at Time=0).

42. **Question:** **[Mock R Output]**

    ```text
    Formula: score ~ Time + I(Time^2) + (1 + Time | Subject)
    Fixed effects:
    (Intercept)   50.0
    Time          10.0
    I(Time^2)     -1.5
    ```

    How would you describe the average growth trajectory based on these fixed effects?

      * A) Linear increase forever.
      * B) Increases initially, but the rate of increase slows down/flattens over time (concave down).
      * C) Decreases initially, then increases (U-shape).
      * D) Flat line.
      * **Answer:** B (Positive linear term, negative quadratic term).

43. **Question:** In the model `score ~ Time + (Time | Subject)`, what does the random effect `(Time | Subject)` allow for?

      * A) Each subject to have their own starting point (intercept) ONLY.
      * B) Each subject to have their own starting point AND their own rate of change (slope).
      * C) Each subject to have their own rate of change ONLY (intercept is fixed).
      * D) Time to vary randomly.
      * **Answer:** B (The random slope (Time | Subject) allows the effect of Time (rate of change) to vary across subjects.)

44. **Question:** Why might you center the `Time` variable (e.g., set the start to 0) in a Growth Curve Model?

      * A) To make the intercept interpretable as the "starting status."
      * B) To eliminate random effects.
      * C) It is required by the `lmer` function.
      * D) To increase the p-value.
      * **Answer:** A (Centering Time at 0 makes the intercept represent the status at the start of the study.)

**Concept: Random Effects in GCM**

45. **Question:** **[Mock R Output]**

    ```text
    Random effects:
     Groups   Name        Variance
     Subject  (Intercept) 200.0
              Time         20.0
    ```

    If the variance for `Time` were 0, what would that imply?

      * A) Everyone starts at the same score.
      * B) Everyone changes at the exact same rate over time (no individual difference in growth).
      * C) There is no measurement error.
      * D) The model is invalid.
      * **Answer:** B (Zero variance in Time means all subjects change at the exact same rate.)

46. **Question:** True or False: In a Growth Curve Model, the "Random Intercept" represents the variance in baseline performance across participants (assuming Time=0 is baseline).

      * A) True
      * B) False
      * **Answer:** A (True. The random intercept captures individual differences in the starting value.)

47. **Question:** What is the "maximal" random effects structure usually recommended for GCM (if it converges)?

      * A) Random intercepts only.
      * B) Random intercepts and random slopes for Time (and any within-subject factors).
      * C) No random effects.
      * D) Random slopes only.
      * **Answer:** B (Maximal structure includes random intercepts and random slopes for all within-subject factors.)

48. **Question:** If your maximal model fails to converge, what is a common pragmatic next step?

      * A) Give up and use ANOVA.
      * B) Simplify the random effects (e.g., remove the random slope or the correlation).
      * C) Add more fixed effects.
      * D) Increase the alpha level.
      * **Answer:** B (Simplifying the random effects structure is the standard approach to resolve convergence issues.)

-----

### **Module 13: Course Wrap-up & Integration**

**Concept: Choosing the Right Test**

49. **Question:** You want to compare the mean happiness scores of 3 different groups (A, B, C) and do not have repeated measures. Which linear model is equivalent to a One-Way ANOVA?

      * A) `lm(happiness ~ 1)`
      * B) `lm(happiness ~ group)`
      * C) `lm(happiness ~ group + age)`
      * D) `lmer(happiness ~ (1|group))`
      * **Answer:** B (One-Way ANOVA is mathematically equivalent to a linear model with a categorical predictor.)

50. **Question:** You have data on students nested within classrooms. You want to predict test scores based on study time. Which model is most appropriate?

      * A) Simple Linear Regression (`lm`)
      * B) Multiple Regression (`lm` with dummies)
      * C) Mixed-Effects Model (`lmer`) with random intercept for Classroom.
      * D) Chi-square test.
      * **Answer:** C (Mixed models properly account for the nesting of students within classrooms.)

51. **Question:** You want to test if the relationship between Stress and Performance is curvilinear (U-shaped). What do you use?

      * A) Interaction term.
      * B) Polynomial regression (quadratic term).
      * C) T-test.
      * D) Random slopes.
      * **Answer:** B (A U-shape is a quadratic relationship, requiring a polynomial term.)

52. **Question:** You measured reaction time for the same subjects at 4 different time points. You want to see if reaction time decreases over time.

      * A) Independent samples t-test.
      * B) Growth Curve Model (Mixed Model with Time).
      * C) Pearson Correlation.
      * D) One-way ANOVA.
      * **Answer:** B (Repeated measures over time call for a Growth Curve Model.)

53. **Question:** Which statistic is best for comparing non-nested models (e.g., models with different dependent variables)?

      * A) AIC
      * B) ANOVA (Likelihood Ratio Test)
      * C) You cannot directly compare them using standard fit indices like AIC/ANOVA.
      * D) R-squared
      * **Answer:** C (Fit indices like AIC require the same outcome data).

54. **Question:** What is the "Null Ritual"?

      * A) A statistical test for zero variance.
      * B) The mindless checking of p \< 0.05 without considering effect sizes, CIs, or theory.
      * C) A method for handling missing data.
      * D) Setting all intercepts to null.
      * **Answer:** B

55. **Question:** True or False: A p-value of 0.001 means the effect size is very large.

      * A) True
      * B) False
      * **Answer:** B (It means the result is unlikely under the null; tiny effects can have tiny p-values in large samples).

**Concept: General R Interpretation**

56. **Question:** **[Mock R Output]**

    ```text
    > summary(model)
    ...
    Residual standard error: 5.2 on 48 degrees of freedom
    Multiple R-squared:  0.45,	Adjusted R-squared:  0.42
    F-statistic: 19.6 on 2 and 48 DF,  p-value: 6.2e-07
    ```

    What percent of the variance in the outcome is explained by the predictors?

      * A) 5.2%
      * B) 42%
      * C) 45%
      * D) 62%
      * **Answer:** C (Multiple R-squared).

57. **Question:** In the output above (\#56), is the overall model statistically significant?

      * A) Yes, p \< 0.05.
      * B) No, p \> 0.05.
      * C) Cannot tell.
      * **Answer:** A (p-value 6.2e-07 is 0.00000062).

58. **Question:** **[Mock R Output]**

    ```text
    shapiro.test(residuals(model))
    W = 0.98, p-value = 0.65
    ```

    Does this result suggest a violation of the normality assumption?

      * A) Yes, because p \> 0.05.
      * B) Yes, because W is not 1.
      * C) No, because p \> 0.05, we fail to reject the null hypothesis of normality.
      * D) No, Shapiro-Wilk is for homogeneity of variance.
      * **Answer:** C (A p-value > 0.05 indicates we do not reject the null hypothesis of normality.)

59. **Question:** **[Mock R Output]**

    ```text
    vif(model)
       x1    x2    x3
     1.2   1.1   8.5
    ```

    Is there a multicollinearity problem here?

      * A) No, all values are below 10.
      * B) Yes, x3 has a VIF of 8.5, which is notably high.
      * C) Yes, x1 is too low.
      * D) VIF measures outliers, not collinearity.
      * **Answer:** B (VIF > 5 or 10 indicates potential multicollinearity issues.)

-----

### **Scenarios and Applied Interpretation**

60. **Question:** A researcher finds that `Income` predicts `Happiness` linearly. However, they suspect that for very high incomes, happiness levels off (asymptotic). Which model limitation does polynomial regression (e.g., quadratic) share with linear regression regarding this specific "leveling off" theory?

      * A) It cannot model curves.
      * B) Polynomials tend to curve back down or shoot up at the tails rather than truly plateauing (asymptotic).
      * C) It assumes equal variance.
      * **Answer:** B (Polynomials tend to curve back down or shoot up at the tails rather than truly plateauing (asymptotic).)

61. **Question:** You are analyzing data on chick weights over time (Growth Curve). You add `Diet` as a fixed effect. This turns your "Unconditional Growth Model" into a...?

      * A) Conditional Growth Model.
      * B) Random Intercept Model.
      * C) Null Model.
      * D) Logistic Model.
      * **Answer:** A (Adding a fixed effect to an unconditional growth model makes it a Conditional Growth Model.)

62. **Question:** **[Mock R Output - Interaction in GCM]**

    ```text
    Fixed effects:
    Time:Diet2    2.50   (p = 0.03)
    Time:Diet3    4.00   (p = 0.001)
    ```

    Reference is Diet1. What does `Time:Diet3` = 4.00 mean?

      * A) Diet3 chicks are 4 grams heavier than Diet1 chicks at the start.
      * B) Diet3 chicks grow at a rate 4 units *faster* per time unit than Diet1 chicks.
      * C) Diet3 chicks grow at a rate of 4 units per time unit total.
      * D) Diet3 has no effect.
      * **Answer:** B (The interaction term indicates the difference in slope relative to the reference group.)

63. **Question:** You run a mixed model and get: `boundary (singular) fit: see ?isSingular`. What is a likely cause?

      * A) The fixed effects are not significant.
      * B) The random effects variance is estimated to be effectively zero (or correlations are -1/1).
      * C) You have too much data.
      * D) The residuals are not normal.
      * **Answer:** B (Singular fit usually indicates that the random effects variance is estimated to be near zero or perfectly correlated.)

64. **Question:** Which plot is best for checking the **homoscedasticity** assumption?

      * A) Q-Q Plot.
      * B) Residuals vs. Fitted Plot.
      * C) Histogram of Residuals.
      * D) Scatterplot of X vs Y.
      * **Answer:** B (Looking for a "funnel" or random cloud, not a pattern).

65. **Question:** Which plot is best for checking the **normality of residuals** assumption?

      * A) Q-Q Plot.
      * B) Residuals vs. Fitted Plot.
      * C) Cook's Distance Plot.
      * D) Boxplot of predictors.
      * **Answer:** A (A Q-Q plot compares the residuals' distribution to a theoretical normal distribution.)

66. **Question:** **[Mock R Output]**

    ```text
    hatvalues(model)
    1      2      3 ...
    0.05   0.02   0.60
    ```

    Observation 3 has a hat value of 0.60 (much higher than others). What does this indicate?

      * A) It is an outlier in the Y direction.
      * B) It has high leverage (outlier in X space).
      * C) It has high influence (Cook's D).
      * D) It is perfectly normal.
      * **Answer:** B (Hat values measure leverage, which identifies outliers in the predictor space.)

67. **Question:** To formally test if a specific influential point is changing your coefficients significantly, what metric would you look at?

      * A) R-squared
      * B) Cook's Distance
      * C) AIC
      * D) The intercept
      * **Answer:** B (Cook's Distance measures the influence of a data point on the model coefficients.)

68. **Question:** In a polynomial regression `y ~ x + I(x^2)`, you decide to center `x` (i.e., `x_centered = x - mean(x)`). What effect does this typically have?

      * A) It changes the shape of the curve.
      * B) It changes the $R^2$ of the model.
      * C) It reduces the correlation (multicollinearity) between the linear and quadratic terms.
      * D) It makes the model non-linear.
      * **Answer:** C (Centering variables reduces structural multicollinearity between the linear and polynomial terms.)

69. **Question:** **[Mock R Output]**

    ```text
    Linear mixed model fit by REML
    t-tests use Satterthwaite's method
    ```

    What does "Satterthwaite's method" refer to?

      * A) A method for estimating degrees of freedom to calculate p-values in mixed models.
      * B) A method for calculating R-squared.
      * C) A method for outlier detection.
      * D) A type of plot.
      * **Answer:** A (Satterthwaite's method is used to estimate effective degrees of freedom for t-tests in mixed models.)

70. **Question:** If you are analyzing repeated measures data (e.g., 3 time points per person) using `lm()` (standard regression), which assumption are you definitely violating?

      * A) Linearity.
      * B) Independence of observations.
      * C) Normality.
      * D) Homoscedasticity.
      * **Answer:** B (Standard regression assumes independence, which is violated by repeated measures on the same subjects.)

71. **Question:** What is the range of possible values for the Intraclass Correlation Coefficient (ICC)?

      * A) -1 to 1
      * B) 0 to 1
      * C) -infinity to +infinity
      * D) 0 to 100
      * **Answer:** B (ICC ranges from 0 to 1, representing the proportion of variance explained by the grouping structure.)

72. **Question:** An ICC of 0 indicates:

      * A) Perfect clustering (all variance is between groups).
      * B) No clustering (all variance is within groups/residual).
      * C) The model is broken.
      * D) Strong negative correlation.
      * **Answer:** B (An ICC of 0 means there is no variance between groups; all variance is within groups.)

73. **Question:** You want to predict `Vocabulary` growth in children (ages 2 to 10). You expect growth to be fast at first and then slow down. Which polynomial term coefficient should be **negative** in your model?

      * A) The Intercept
      * B) The Linear Time slope
      * C) The Quadratic Time slope (`I(Time^2)`)
      * D) The Random Intercept
      * **Answer:** C (A negative quadratic term creates a downward curvature, representing deceleration.)

74. **Question:** **[Mock R Output]**

    ```text
    Formula: weight ~ Time + Diet
    AIC: 5500
    Formula: weight ~ Time * Diet
    AIC: 5400
    ```

    Which model is better according to AIC?

      * A) The Additive model (+)
      * B) The Interaction model (\*)
      * **Answer:** B (Lower AIC is better).

75. **Question:** When reporting a Growth Curve Analysis, what is crucial to include besides the p-values?

      * A) The raw data for every participant.
      * B) The type of polynomial used, the random effects structure, and parameter estimates.
      * C) The name of the computer used.
      * D) Only the R-squared.
      * **Answer:** B (Reporting requirements include the model structure, random effects, and parameter estimates, not just significance.)

76. **Question:** In `ggplot2`, which geometric object is useful for adding the fitted regression line (including polynomial fits) to a plot?

      * A) `geom_point()`
      * B) `geom_smooth()`
      * C) `geom_bar()`
      * D) `geom_boxplot()`
      * **Answer:** B (geom_smooth adds a smoothed conditional mean, often a regression line.)

77. **Question:** **[Mock R Output - Orthogonal Polynomials]**

    ```text
    Coefficients:
    (Intercept)  10.0
    poly(Time,2)1 50.0
    poly(Time,2)2 10.0
    ```

    Can you interpret the coefficient `50.0` as "the increase in outcome for a 1-unit increase in Time"?

      * A) Yes.
      * B) No, because orthogonal polynomials transform the variable scale.
      * **Answer:** B (Orthogonal polynomials are transformed and uncorrelated, so coefficients don't represent simple unit changes in the raw variable.)

78. **Question:** Which function from the `performance` package can you use to check model performance metrics (like $R^2$, AIC, ICC) all at once?

      * A) `summary()`
      * B) `model_performance()` or `check_model()`
      * C) `plot()`
      * D) `anova()`
      * **Answer:** B (The performance package provides tools like model_performance() to check multiple metrics.)

79. **Question:** **[Mock R Output]**

    ```text
    anova(m_null, m_full)
    Models:
    m_null: outcome ~ 1 + (1 | group)
    m_full: outcome ~ predictor + (1 | group)
       Df    AIC    BIC  logLik  Chisq Chi Df Pr(>Chisq)
    m_null  3 1050.0 1060.0 -522.0
    m_full  4 1045.0 1058.0 -518.5   7.0      1   0.008 **
    ```

    Is the predictor significant?

      * A) Yes, p = 0.008.
      * B) No.
      * C) The null model is better.
      * D) AIC suggests the null model.
      * **Answer:** A (P-value < 0.05 indicates statistical significance.)

80. **Question:** What is a "Random Slope"?

      * A) It allows the relationship between a predictor and the outcome to vary across groups (e.g., different subjects show different growth rates).
      * B) It allows the mean of the outcome to vary across groups.
      * C) It is the error term.
      * D) It is a fixed constant.
      * **Answer:** A (Random slopes allow the effect of a predictor to vary by group/subject.)

81. **Question:** In the equation $Y_{si} = b_{0s} + b_{1s}Time_i + e_{si}$, if $b_{1s} = b_1 + S_{1s}$, what does $S_{1s}$ represent?

      * A) The fixed slope for the whole population.
      * B) The random deviation of subject $s$'s slope from the population slope.
      * C) The intercept.
      * D) The residual error.
      * **Answer:** B (S_1s is the subject-specific random deviation from the population fixed slope.)

82. **Question:** If you are studying "Teams" nested in "Organizations," how would you specify nested random intercepts in `lmer`?

      * A) `(1 | Organization) + (1 | Team)` (if Team IDs are unique across organizations).
      * B) `(1 | Organization/Team)` (if Team IDs are recycled, e.g., Team 1 in Org A and Team 1 in Org B).
      * C) Both A and B can be correct depending on coding.
      * D) All of the above.
      * **Answer:** D (Both specifications can work depending on whether IDs are unique or recycled, making 'All of the above' the safest answer.)

83. **Question:** What does `REML=FALSE` (Maximum Likelihood) allow you to do that `REML=TRUE` does not?

      * A) Get accurate variance estimates.
      * B) Compare models with different **fixed effects** using Likelihood Ratio Tests (ANOVA).
      * C) Run the model faster.
      * D) Ignore assumptions.
      * **Answer:** B (ML (REML=FALSE) is required when comparing models with different fixed effects using LRT.)

84. **Question:** **[Mock R Output]**

    ```text
    Correlation of Fixed Effects:
          (Intr)  Time
    Time  -0.40
    Time2  0.10   -0.85
    ```

    There is a high correlation (-0.85) between the `Time` and `Time2` (quadratic) estimates. What does this suggest?

      * A) The model is wrong.
      * B) This is essential multicollinearity, common in raw polynomial regression. Centering time might help.
      * C) Time causes Time2.
      * D) You should drop Time2.
      * **Answer:** B (High correlation between polynomial terms usually indicates essential multicollinearity; centering helps.)

85. **Question:** Why is it dangerous to interpret the main effect of `Time` in a model where the interaction `Time:Diet` is significant?

      * A) Because the effect of Time depends on which Diet the chick is on.
      * B) Because Time is not real.
      * C) Because the p-values are wrong.
      * D) You should always interpret main effects regardless of interactions.
      * **Answer:** A (An interaction means the effect of one variable changes depending on the level of the other.)

86. **Question:** A researcher uses a 10th-order polynomial for a dataset with 20 points. What is the likely problem?

      * A) Underfitting.
      * B) Overfitting (modeling noise).
      * C) Perfect fit (good thing).
      * D) Linearity.
      * **Answer:** B (Using a high-degree polynomial on small data fits noise, leading to overfitting.)

87. **Question:** If the `t-value` for a fixed effect in `lmer` is 1.5, is it statistically significant at alpha=0.05?

      * A) Yes.
      * B) No (Needs to be \> \~1.96).
      * C) Yes, because it's positive.
      * **Answer:** B (A t-value of 1.5 corresponds to a p-value > 0.05; significance usually requires |t| >= 1.96.)

88. **Question:** What does the "Intercept" represent in a model using orthogonal polynomials `poly(x, 2)`?

      * A) The value of Y when x = 0.
      * B) The grand mean of Y.
      * C) It has no meaning.
      * D) The slope.
      * **Answer:** B (With orthogonal polynomials, the intercept represents the grand mean of the response.)

89. **Question:** **[Mock R Output]**

    ```text
    Confidence Intervals (95%)
    Variable      2.5%    97.5%
    Treatment     -0.5     2.3
    ```

    What can you conclude about the effect of Treatment?

      * A) It is statistically significant.
      * B) It is not statistically significant (interval contains 0).
      * C) The effect size is exactly 0.
      * D) The effect is negative.
      * **Answer:** B (If the confidence interval includes zero, the effect is not statistically significant.)

90. **Question:** In the context of the ChickWeight data used in class, what was the dependent variable?

      * A) Time
      * B) Diet
      * C) Weight
      * D) Chick ID
      * **Answer:** C (In the ChickWeight dataset, Weight is the outcome variable.)

91. **Question:** You want to check if a random slope for `Day` improves your model `m0`.
    `m0 <- lmer(y ~ Day + (1|Subj))`
    `m1 <- lmer(y ~ Day + (1 + Day|Subj))`
    `anova(m0, m1)` yields p = 0.60.
    What do you do?

      * A) Keep the random slope (m1) because more complex is better.
      * B) Stick with the simpler model (m0) because the random slope didn't significantly improve fit.
      * C) Change the fixed effects.
      * **Answer:** B (If the more complex model (m1) is not significantly better (p > 0.05), prefer the simpler model (m0).)

92. **Question:** What does the function `coef(model)` return for a mixed model?

      * A) Only the fixed effects.
      * B) Only the variance components.
      * C) The sum of fixed effects + random effects deviations for each group (individual-level coefficients).
      * D) The p-values.
      * **Answer:** C (coef() returns the sum of fixed and random effects for each group.)

93. **Question:** What does the function `fixef(model)` return?

      * A) The fixed effects estimates only (population averages).
      * B) The random effects.
      * C) The residuals.
      * **Answer:** A (fixef() extracts only the fixed effects parameters.)

94. **Question:** **[Mock R Output]**

    ```text
    Data: sleepstudy
    Formula: Reaction ~ Days + (1 | Subject)
    RMSE: 30.0
    ```

    If you add random slopes and the RMSE drops to 25.0, does the model fit better or worse?

      * A) Worse (higher error).
      * B) Better (lower error).
      * **Answer:** B (Lower RMSE indicates smaller prediction errors, hence a better fit.)

95. **Question:** In the "Politeness" data example from class, "Attitude" (polite vs informal) was a:

      * A) Random Effect.
      * B) Fixed Effect.
      * C) Outcome variable.
      * D) Covariate.
      * **Answer:** B (Attitude was a manipulated condition, thus a Fixed Effect.)

96. **Question:** In the "Politeness" data example, "Scenario" (different situations like asking for a favor) was modeled as:

      * A) Fixed Effect.
      * B) Random Intercept.
      * C) Outcome.
      * D) Not included.
      * **Answer:** B (Scenario was a random factor, specifically a Random Intercept.)

97. **Question:** True or False: You can typically use `lmer` to analyze data with only 1 observation per subject.

      * A) True.
      * B) False (You generally need multiple observations per group to estimate random effects/variance within group).
      * **Answer:** B (Mixed models require multiple observations per group to separate within-group and between-group variance.)

98. **Question:** Which is a valid reason to use a **conditional** R-squared?

      * A) To see how much variance the fixed effects explain alone.
      * B) To see how much variance the *entire* model (including subject differences) explains.
      * C) To calculate p-values.
      * **Answer:** B (Conditional R-squared measures variance explained by both fixed and random effects.)

99. **Question:** If your residual plot shows a "fan" shape (spread increases as fitted values increase), which assumption is violated?

      * A) Normality.
      * B) Homoscedasticity (Homogeneity of Variance).
      * C) Linearity.
      * D) Independence.
      * **Answer:** B (A fan shape in residuals indicates heteroscedasticity, violating the homoscedasticity assumption.)

100. **Question:** **[Mock R Output]**

     ```text
     (Intercept)   100
     Poly(Time,2)1  10
     Poly(Time,2)2  -5
     ```

     Because this uses orthogonal polynomials, what is the correlation between the estimates for `Poly(Time,2)1` (linear component) and `Poly(Time,2)2` (quadratic component)?

       * A) High positive.
       * B) High negative.
       * C) Zero (by definition of orthogonal).
       * D) Unknown.
       * **Answer:** C (Orthogonal polynomials are constructed to be uncorrelated with each other.)