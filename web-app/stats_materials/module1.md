# Module 1: Introduction & Probability

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