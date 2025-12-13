# Module 3: Hypothesis Testing

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

56. **Cohen's d is a measure of:**
    A. Statistical significance
    B. Effect size (standardized mean difference)
    C. Variance explained
    D. Sampling error

57. **A Cohen's d of 0.8 is generally considered a:**
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