# Disingenous Question Detection on Reddit

## Motivation
As we know, Reddit is an online platform where people ask questions and
anyone can answer them. However, some users use such platforms to spread
inflammatory questions or spread hate speech. This belies the original purpose
of such platforms, which are primarily used to convey genuine information/news
to users.
## Objective:
To prevent spam users from spreading rumours or falsely influencing people, we
have built a data mining algorithm which predicts which question thread is
disingenuous.

## Approach:
Further analysis of the problem statement revealed that this category of problems
could be solved using data mining and machine learning methodologies. The
problem essentially involves analyzing the text, understanding its context, and
identifying certain words or phrases that would help in detecting whether a
particular question is appropriate or inappropriate.
ML makes textual analysis much faster and more efficient than manual
processing of texts. It allows to reduce labor costs and speed up the processing
of texts without compromising on quality.
Since this is primarily a classification problem, classification algorithms like
logistic regression, SVM, KNN, etc. are potential approaches that can be
leveraged to obtain the desired results.

Our approach can be summed up as follows:
* Understanding the data
* Identifying potential solutions ( Algorithm selection)
* Comparing results to identify optimal solutions

## Decisions:
The following questions needed to be answered during the development process:
1. Which algorithms were best suited to evaluate the problem statement?
2. Considering the resource constraints, which algorithm is optimal?
3. Is the data enough to produce a relatively sound decision?
4. Trade off between speed and accuracy?
5. Does increase in complexity often produce better results?
6. Which technology stack needed to be used to build the web application?


## Algorithms used to compare and contrast
1. Logistic Regression
2. Multinomial NB
3. Neural Networks

## Technologies and tools used:
1. Jupyter Notebook/VS Code : IDE used for coding the solution.
2. Python was used to implement the algorithms. Various predefined libraries
like Sci kit learn, NLTK, Pandas, Numpy etc. were used to perform data
preprocessing, feature engineering etc.
3. React JS and Flask were used for building the frontend and backend of
the GUI/ Web Application respectively.
4. Postman was used to test the API.

## Procedure to run project
1. To run flask:

    Go to ./backend

    `flask run`
2. Open new terminal

4. To run react app:

    Go to ./fronend

    `npm install`

    `npm run build`

    `npm start`
    
 ## Future Scope
 1. Many more approaches like SVM and KNN can be used to evaluate the
problem.
2. More advanced text analysis techniques can be used to understand the
nuances of the questions better, to provide more fine grained results.
3. Here we are considering only two classes of questions. We can use more
advanced techniques to identify what kind of question it is (which topic
does it belong to)
4. Further analysis can be carried out on the same dataset to infer the mood
of the people based on the kinds of questions being asked. This in turn
can be used by policy makers, law enforcement officials to understand
people's sentiments, without any privacy violations.

### For any further information (output screens and graphs) kindly refer to report present in project folder

