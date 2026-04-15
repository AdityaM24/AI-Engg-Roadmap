import { useState, useEffect } from "react";

const HOURS = "4–5 hrs";

const schedule = [
  // ── PHASE 1: PYTHON FROM SCRATCH ─────────────────────────────
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 1,
    title: "Environment + Python Basics I",
    topics: ["Install Python 3.11, VSCode, Git. Understand virtualenv vs conda.", "Variables, types (int/float/str/bool/None), type casting", "Input/output, f-strings, string methods", "if/elif/else logic, comparison & logical operators"],
    practice: "Write a BMI calculator. Write a simple number guessing game.",
    resource: "Python.org tutorial §1–4 OR freeCodeCamp Python full course (0:00–1:30hr)",
    tag: "Python"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 2,
    title: "Python Basics II — Loops & Functions",
    topics: ["for loops, while loops, range(), break/continue", "Functions: def, return, default args, *args, **kwargs", "Scope: local vs global. Recursion basics.", "List comprehensions (most used Python pattern)"],
    practice: "FizzBuzz. Fibonacci with recursion. Flatten a nested list with comprehension.",
    resource: "CS Dojo Python for Beginners playlist (loops + functions episodes)",
    tag: "Python"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 3,
    title: "Data Structures — Lists, Dicts, Sets, Tuples",
    topics: ["List methods: append, pop, sort, slice", "Dict: get, items(), keys(), values(), defaultdict", "Set operations: union, intersection, difference", "Tuples: immutability and when to use them", "When to use which structure — interview bread & butter"],
    practice: "Count word frequency in a string (dict). Remove duplicates preserving order (set trick). LeetCode Easy: Two Sum.",
    resource: "NeetCode - Arrays & Hashing intro video",
    tag: "Python"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 4,
    title: "OOP — Classes & Objects",
    topics: ["class, __init__, self — what they actually mean", "Instance vs class variables", "Inheritance, super()", "Dunder methods: __str__, __repr__, __len__, __eq__", "Dataclasses (modern Python, used everywhere in ML code)"],
    practice: "Build a BankAccount class. Build a Stack using a class. Extend it with inheritance.",
    resource: "Corey Schafer OOP Python series (YouTube, 6 videos)",
    tag: "Python"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 5,
    title: "File I/O, Error Handling, Modules",
    topics: ["open(), read/write files, with statement (context managers)", "try/except/finally, raising custom exceptions", "import, __name__ == '__main__', package structure", "JSON: json.loads / json.dumps — used in every API"],
    practice: "Read a CSV manually (no pandas). Write a JSON config parser. Build a simple logger.",
    resource: "Real Python - File I/O article + Error Handling article",
    tag: "Python"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 6,
    title: "Python Power Features",
    topics: ["Decorators — what @wraps actually does, build one from scratch", "Generators: yield vs return, memory efficiency", "itertools: chain, groupby, islice — used in data pipelines", "Lambda, map, filter — know when NOT to use them"],
    practice: "Build a timing decorator. Write an infinite counter generator. Solve LeetCode: Valid Parentheses.",
    resource: "Fluent Python Ch.7 (decorators) — free summary on Real Python",
    tag: "Python"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 7,
    title: "Python Review + DSA Intro",
    topics: ["Revise Days 1–6: write 3 programs from memory without referencing notes", "Big-O notation: O(1), O(n), O(n²), O(log n) — what they mean", "Arrays vs Linked Lists mental model", "Python list is a dynamic array — implications for performance"],
    practice: "LeetCode: Contains Duplicate, Best Time to Buy/Sell Stock. Explain your solution's time complexity.",
    resource: "NeetCode Big-O video (15 min) — watch twice",
    tag: "Python+DSA"
  },
  // ── PHASE 1 WEEK 2: NUMPY, PANDAS, SQL ────────────────────────
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 8,
    title: "NumPy — Arrays & Math",
    topics: ["ndarray vs Python list — why NumPy is 100x faster (vectorization)", "Array creation: zeros, ones, arange, linspace, random", "Indexing, slicing, boolean masking", "Broadcasting — the most confusing NumPy concept, master it", "dot product, transpose, reshape — used in every ML model"],
    practice: "Implement dot product from scratch. Normalize an array to 0-1. Solve 5 NumPy exercises from numpy.org.",
    resource: "CS231n NumPy Tutorial (stanford.edu) — gold standard",
    tag: "NumPy"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 9,
    title: "Pandas — Data Wrangling I",
    topics: ["Series vs DataFrame, creating from dict/list/CSV", "read_csv, head, info, describe, dtypes", "Selecting: loc vs iloc (people fail interviews on this)", "Filtering rows with conditions, .query()", "Handling nulls: isnull, fillna, dropna"],
    practice: "Load the Titanic dataset (Kaggle). Answer: survival rate by class, avg age by gender, null counts per column.",
    resource: "Kaggle Pandas course (free, 6 lessons) — do lessons 1–3",
    tag: "Pandas"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 10,
    title: "Pandas — Data Wrangling II",
    topics: ["groupby + agg — the most used pattern in data analysis", "merge, join, concat — SQL joins in Pandas", "apply, map, lambda on columns", "pivot_table, value_counts, sort_values", "String operations: .str.contains, .str.split"],
    practice: "Kaggle Pandas lessons 4–6. Find top 5 cities by avg sales in a mock dataset you create.",
    resource: "Kaggle Pandas course (lessons 4–6)",
    tag: "Pandas"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 11,
    title: "SQL — Foundations",
    topics: ["What is a relational database? Tables, rows, columns, primary/foreign keys", "SELECT, FROM, WHERE, ORDER BY, LIMIT", "AND/OR/NOT, IN, BETWEEN, LIKE, IS NULL", "Aggregate functions: COUNT, SUM, AVG, MIN, MAX", "GROUP BY + HAVING — and why HAVING ≠ WHERE"],
    practice: "SQLZoo: SELECT basics + SELECT from World (sections 1–4). LeetCode SQL Easy: Combine Two Tables.",
    resource: "SQLZoo.net (free, interactive) + Mode Analytics SQL Tutorial Intro",
    tag: "SQL"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 12,
    title: "SQL — JOINs & Subqueries",
    topics: ["INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN — with Venn diagram mental model", "Self joins (tricky interview question)", "Subqueries in WHERE, FROM, SELECT clauses", "CTEs: WITH clause — cleaner than subqueries", "UNION vs UNION ALL"],
    practice: "LeetCode SQL: Employees Earning More Than Managers. Second Highest Salary. Department Top Three Salaries.",
    resource: "Mode Analytics SQL Tutorial: Intermediate section",
    tag: "SQL"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 13,
    title: "SQL — Window Functions (Interview Gold)",
    topics: ["ROW_NUMBER, RANK, DENSE_RANK — differences and when each is used", "PARTITION BY: reset ranking per group", "LAG, LEAD: access previous/next row — used in time series", "FIRST_VALUE, LAST_VALUE", "Running totals with SUM() OVER (ORDER BY ...)"],
    practice: "LeetCode SQL Medium: Rank Scores. Department Highest Salary. Consecutive Numbers. Nth Highest Salary.",
    resource: "StrataScratch Window Functions tutorial",
    tag: "SQL"
  },
  {
    phase: 1, phaseTitle: "Python From Scratch", phaseColor: "#FFB347", day: 14,
    title: "Visualization + Week Review",
    topics: ["Matplotlib: line, bar, scatter, histogram — just the essentials", "Seaborn: heatmap (correlation matrix), boxplot, pairplot", "What makes a good chart — axis labels, titles, colors", "EDA workflow: shape → types → nulls → distributions → correlations"],
    practice: "Full EDA on Titanic dataset. Create 5 meaningful charts. Write 3 insights in plain English.",
    resource: "Seaborn official tutorial (gallery section) — copy and modify examples",
    tag: "Viz+EDA"
  },
  // ── PHASE 2: ML FUNDAMENTALS ──────────────────────────────────
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 15,
    title: "ML Mindset + Linear Regression",
    topics: ["What is ML? Supervised vs Unsupervised vs Reinforcement — with real examples", "Training set, validation set, test set — WHY we split (data leakage explained)", "Linear regression: y = mx + b → cost function (MSE) → minimize it", "Gradient descent: intuition of 'rolling downhill'", "Implementing linear regression in pure numpy (no sklearn yet)"],
    practice: "Implement linear regression from scratch. Predict house prices on a toy dataset.",
    resource: "StatQuest: Linear Regression (YouTube) — Josh Starmer is the GOAT for ML intuition",
    tag: "ML"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 16,
    title: "Classification + Logistic Regression",
    topics: ["Classification vs regression — conceptual difference", "Logistic regression: sigmoid function, why it outputs probability", "Decision boundary intuition", "Loss function: Binary Cross-Entropy (why not MSE for classification)", "Metrics: Accuracy, Precision, Recall, F1 — when each matters (imbalanced data!)"],
    practice: "Sklearn logistic regression on Iris dataset. Plot confusion matrix. Explain why accuracy is misleading on imbalanced data.",
    resource: "StatQuest: Logistic Regression + Confusion Matrix videos",
    tag: "ML"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 17,
    title: "Decision Trees + Overfitting",
    topics: ["How a decision tree splits: information gain, Gini impurity", "Overfitting: model memorizes training data — visualize it", "Underfitting vs overfitting — the bias-variance tradeoff", "Regularization concept: constraining model complexity", "Pruning, max_depth, min_samples_split — hyperparameters"],
    practice: "Train a decision tree with no depth limit vs max_depth=3. Plot both. See overfitting visually.",
    resource: "StatQuest: Decision Trees. Hands-On ML Ch.6 (Géron)",
    tag: "ML"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 18,
    title: "Ensemble Methods — RF + XGBoost",
    topics: ["Random Forest: bagging + feature randomness = why it beats single trees", "Boosting: XGBoost — trees built sequentially, each corrects previous errors", "Feature importance — what it means and what it doesn't", "SHAP values: explain individual predictions (you used this in ChurnSense!)", "When to use RF vs XGBoost vs Logistic Regression"],
    practice: "Train XGBoost on Titanic. Tune max_depth, learning_rate, n_estimators. Plot SHAP summary plot.",
    resource: "StatQuest: Random Forest + XGBoost series (3 videos). SHAP docs quickstart.",
    tag: "ML"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 19,
    title: "Model Evaluation + Cross Validation",
    topics: ["Train/val/test split — golden rule: never touch test set until the end", "K-Fold cross validation: why it gives more reliable accuracy estimate", "ROC-AUC: what it measures, how to read the curve", "Hyperparameter tuning: GridSearchCV vs RandomizedSearchCV", "Sklearn Pipeline: prevent data leakage with transforms inside CV"],
    practice: "Build an Sklearn Pipeline: imputer → scaler → XGBoost. Run 5-fold CV. Report mean AUC ± std.",
    resource: "Hands-On ML Ch.2 end-to-end example (Géron) — most practical chapter in the book",
    tag: "ML"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 20,
    title: "Unsupervised Learning",
    topics: ["K-Means clustering: centroid algorithm, choosing k (elbow method)", "DBSCAN: density-based, handles odd shapes, no need to specify k", "PCA: dimensionality reduction, explained variance, when to use it", "t-SNE: for visualization only (cannot use for downstream ML)", "Real use cases: customer segmentation, anomaly detection, compression"],
    practice: "K-Means on Mall Customer dataset. PCA on MNIST (visualize in 2D). Compare t-SNE vs PCA plots.",
    resource: "StatQuest: K-Means, PCA videos. Sklearn user guide examples.",
    tag: "ML"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 21,
    title: "ML Math Foundations",
    topics: ["Linear algebra: vectors, matrices, dot product, matrix multiply — why neural nets are matrix math", "Calculus intuition: derivative = slope, partial derivative = slope in one direction", "Chain rule: why backpropagation works (conceptual, not formal proof)", "Probability: P(A|B) Bayes theorem, distributions (Normal, Bernoulli)", "Statistics: mean/median/std, correlation vs causation, central limit theorem"],
    practice: "Derive the gradient of MSE loss w.r.t. weights by hand. Implement a coin flip simulator verifying CLT.",
    resource: "3Blue1Brown: Essence of Linear Algebra (playlist). StatQuest: Probability Basics.",
    tag: "Math"
  },
  // ── PHASE 2 WEEK 2: DEEP LEARNING ─────────────────────────────
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 22,
    title: "Neural Networks from Scratch",
    topics: ["Neuron = linear function + activation. Layer = many neurons.", "Activation functions: ReLU, Sigmoid, Softmax — when to use each", "Forward pass: input → hidden → output", "Loss functions: MSE (regression), Cross-Entropy (classification)", "Backpropagation: chain rule applied layer by layer"],
    practice: "Build a 2-layer neural network in pure numpy. Train it on XOR problem. No PyTorch/TF yet.",
    resource: "3Blue1Brown: Neural Networks series (4 videos — mandatory). Andrej Karpathy micrograd repo.",
    tag: "DL"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 23,
    title: "PyTorch Fundamentals",
    topics: ["Tensor: PyTorch's numpy array + GPU support + autograd", "requires_grad, .backward(), .grad — automatic differentiation", "nn.Module, nn.Linear, nn.ReLU — building blocks", "Training loop: forward → loss → backward → optimizer.step()", "DataLoader, Dataset — batch training workflow"],
    practice: "Rebuild your numpy NN in PyTorch. Train a classifier on MNIST. Achieve >95% accuracy.",
    resource: "PyTorch official 60-min blitz tutorial. freeCodeCamp PyTorch full course (first 3 hrs).",
    tag: "PyTorch"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 24,
    title: "CNNs + Transfer Learning",
    topics: ["Convolution: filter sliding over image, detecting features", "MaxPooling: spatial downsampling", "CNN architecture: Conv → Pool → Conv → Pool → Flatten → FC", "Transfer learning: freeze pretrained weights, train only head", "torchvision models: ResNet, EfficientNet — load and fine-tune"],
    practice: "Fine-tune ResNet18 on CIFAR-10 (or any 2-class image dataset). Achieve >90% in <5 epochs using transfer learning.",
    resource: "fast.ai Practical DL Lesson 1 (best intro to transfer learning). PyTorch transfer learning tutorial.",
    tag: "DL"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 25,
    title: "NLP Basics + Embeddings",
    topics: ["Tokenization: word, subword (BPE), character level — why subword wins", "Bag of Words, TF-IDF — old school but asked in interviews", "Word2Vec intuition: words as vectors, king - man + woman = queen", "Sentence embeddings: meaning as a vector in high-dim space", "Cosine similarity: how we measure semantic closeness"],
    practice: "TF-IDF on a news dataset. Visualize Word2Vec embeddings with t-SNE. Find top-5 similar words to 'bank'.",
    resource: "StatQuest Word2Vec video. HuggingFace NLP Course Chapter 1–2 (free).",
    tag: "NLP"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 26,
    title: "Transformers — How They Actually Work",
    topics: ["Attention mechanism: 'which words should I focus on when reading this word?'", "Self-attention: Q, K, V matrices — step by step with numbers", "Multi-head attention: multiple attention patterns simultaneously", "Positional encoding: transformers have no order by default", "Encoder-only (BERT) vs Decoder-only (GPT) vs Encoder-Decoder (T5)"],
    practice: "Read 'The Illustrated Transformer' by Jay Alammar end to end. Draw the architecture from memory.",
    resource: "Jay Alammar: The Illustrated Transformer (jalammar.github.io) — the best transformer explanation ever written.",
    tag: "Transformers"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 27,
    title: "HuggingFace Ecosystem",
    topics: ["HuggingFace Hub: models, datasets, spaces — your new home", "Transformers library: pipeline(), AutoModel, AutoTokenizer", "Run inference: sentiment, NER, summarization, translation in 5 lines", "Datasets library: load_dataset, map, filter", "Spaces: deploy a demo for free — interviewers love a live demo link"],
    practice: "Build 3 pipelines: sentiment analysis, summarization, NER. Push a simple Gradio demo to HF Spaces.",
    resource: "HuggingFace NLP Course Ch.1–3 (free at huggingface.co/learn)",
    tag: "HuggingFace"
  },
  {
    phase: 2, phaseTitle: "ML Fundamentals", phaseColor: "#64FFDA", day: 28,
    title: "ML Project Day — ChurnSense Rebuild",
    topics: ["Rebuild ChurnSense end-to-end from scratch: EDA → feature eng → XGBoost → SHAP → FastAPI", "Goal: you should be able to explain EVERY line of code in an interview", "Add a proper README with architecture diagram", "Dockerize it. Make sure docker build && docker run actually works."],
    practice: "This IS the practice. Commit to GitHub with a clean, professional README.",
    resource: "Your existing ChurnSense code + SHAP docs + FastAPI docs",
    tag: "Project"
  },
  // ── PHASE 3: GENAI & LLM ENGINEERING ─────────────────────────
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 29,
    title: "LLMs 101 — Karpathy Deep Dive Part 1",
    topics: ["Watch Karpathy Deep Dive (0:00–1:45hr): Pretraining — data collection, tokenization, Transformer I/O internals", "GPT-2 training walkthrough: what actually happens during training", "Llama 3.1 base model inference examples — what a base model looks like vs assistant", "Tokens: everything is tokens. 1 token ≈ 0.75 words. Tokenization quirks.", "Context window: what it is, why it matters, how it affects cost and quality"],
    practice: "Use the Groq API directly (it's free). Send 10 prompts varying temperature from 0 to 1. Try a base model vs instruct model. Observe differences.",
    resource: "⭐ UPGRADED: Andrej Karpathy — 'Deep Dive into LLMs like ChatGPT' (YouTube, 3.5hrs, Feb 2025). Watch 0:00–1:45hr today. This replaced the old 1hr Intro video — far more comprehensive.",
    tag: "LLM"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 30,
    title: "LLMs 101 — Karpathy Deep Dive Part 2 + Prompting",
    topics: ["Watch Karpathy Deep Dive (1:45hr–end): Supervised fine-tuning, RLHF, DPO, DeepSeek-R1, reasoning models", "'LLM Psychology': hallucinations, tool use, knowledge vs working memory, jagged intelligence", "Temperature, top-p, top-k — controlling randomness, when to use each", "Prompting: zero-shot, few-shot, chain-of-thought, system vs user prompt", "Structured output: JSON mode, Instructor library. Prompt injection attacks."],
    practice: "Build a structured output extractor: given a job description, extract {role, skills, salary, location} as JSON using Instructor. Then try breaking it with a prompt injection.",
    resource: "Karpathy Deep Dive (1:45hr–end). Then: Anthropic Prompt Engineering Guide (docs.anthropic.com). OpenAI cookbook on structured outputs.",
    tag: "LLM"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 31,
    title: "RAG — Retrieval Augmented Generation",
    topics: ["Why RAG: LLMs hallucinate facts, RAG grounds them in real documents", "RAG pipeline: Documents → Chunks → Embeddings → Vector DB → Retrieve → Augment → Generate", "Chunking strategies: fixed-size, sentence, semantic — tradeoffs", "Embedding models: text-embedding-3-small, BGE, E5 — how to choose", "Vector databases: Qdrant, Chroma, FAISS — hands-on with at least one"],
    practice: "Build a basic RAG: ingest 3 PDFs about a topic, answer questions about them using Chroma + OpenAI/Groq.",
    resource: "LangChain RAG tutorial (python.langchain.com). Pinecone learning center RAG guide.",
    tag: "RAG"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 32,
    title: "Advanced RAG",
    topics: ["Naive RAG problems: low recall, irrelevant chunks, context overflow", "Hybrid search: BM25 (keyword) + dense (semantic) — best of both worlds", "Reranking: CrossEncoder reranker after initial retrieval", "HyDE: generate a hypothetical answer, then search for it", "Multi-query retrieval: generate 3 versions of query, merge results"],
    practice: "Upgrade yesterday's RAG: add hybrid search + reranker. Measure answer quality before/after.",
    resource: "LangChain Advanced RAG cookbook. Cohere Rerank API docs.",
    tag: "RAG"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 33,
    title: "LLM Agents — Foundations",
    topics: ["What is an agent? LLM + tools + memory + reasoning loop", "ReAct pattern: Reason → Act → Observe → Repeat", "Tool calling: how LLMs decide when/which tool to call", "Memory types: in-context (conversation), external (vector store), semantic (summaries)", "Agent failure modes: loops, hallucinated tool calls, context overflow"],
    practice: "Build a ReAct agent from scratch using only the raw LLM API (no framework). Tools: calculator, web search.",
    resource: "Lilian Weng: LLM-powered Autonomous Agents blog post (lilianweng.github.io) — mandatory read.",
    tag: "Agents"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 34,
    title: "LangGraph Deep Dive",
    topics: ["StateGraph: nodes (functions) + edges (transitions) + shared state", "Conditional edges: routing based on LLM output or state", "Cycles: how to build loops that terminate safely", "Checkpointing: save/resume agent runs (production critical)", "Human-in-the-loop: interrupt graph for human approval"],
    practice: "Build a research agent in LangGraph: takes a question, searches web, synthesizes answer, asks human if confident enough.",
    resource: "LangGraph official tutorials (all of them — python.langchain.com/docs/langgraph). You know this, go deeper.",
    tag: "LangGraph"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 35,
    title: "Multi-Agent Systems",
    topics: ["Why multi-agent: specialized agents > one generalist agent", "Supervisor pattern: orchestrator routes to specialist sub-agents", "Parallel execution: fan-out nodes in LangGraph", "Agent communication: shared state vs message passing", "Your NL2SQL system: re-examine architecture, find weak points"],
    practice: "Build a 3-agent system: Planner → Researcher → Writer. Planner breaks task, Researcher gathers info, Writer drafts output.",
    resource: "LangGraph multi-agent docs. Andrew Ng: Agentic Design Patterns blog (deeplearning.ai).",
    tag: "LangGraph"
  },
  // ── PHASE 3 WEEK 2: PRODUCTION + TRENDS ───────────────────────
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 36,
    title: "Fine-Tuning LLMs",
    topics: ["When to fine-tune: style/format adaptation, NOT for adding knowledge", "LoRA: Low-Rank Adaptation — train 1% of params, get 90% of the gain", "QLoRA: quantized LoRA — fine-tune 7B model on free Colab GPU", "DPO vs RLHF: newer, simpler alignment technique", "HuggingFace PEFT + TRL libraries for fine-tuning"],
    practice: "Fine-tune Llama 3.2 1B on a custom Q&A dataset using QLoRA on Colab. Push to HuggingFace Hub.",
    resource: "HuggingFace PEFT docs. Maxime Labonne QLoRA guide (GitHub). TRL SFTTrainer tutorial.",
    tag: "Fine-tuning"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 37,
    title: "LLM Evaluation",
    topics: ["Why eval is hard: LLMs don't have a single right answer", "RAGAS: faithfulness, answer relevancy, context precision — for RAG systems", "LLM-as-judge: use GPT-4 to score another model's outputs", "G-EVAL framework: criteria-based evaluation with CoT", "Building an eval harness: dataset of Q&A pairs, automated scoring"],
    practice: "Build a RAGAS eval pipeline for your RAG system from Day 31. Score faithfulness + relevancy on 20 questions.",
    resource: "RAGAS docs (docs.ragas.io). LMSYS Chatbot Arena paper for eval methodology.",
    tag: "Evals"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 38,
    title: "LLM Ops & Production",
    topics: ["LangSmith: tracing agent runs, debugging tool calls, latency tracking", "Caching: exact cache (same query) + semantic cache (similar query) — cost reduction", "Streaming: why users expect it, how to implement with SSE in FastAPI", "Cost optimization: prompt compression, smaller models for simple tasks, batching", "Rate limits & retry logic — production necessity"],
    practice: "Add LangSmith tracing to your LangGraph agent. Add streaming to your FastAPI endpoint. Add semantic caching with Redis.",
    resource: "LangSmith quickstart docs. FastAPI streaming response docs. GPTCache library.",
    tag: "LLMOps"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 39,
    title: "Current AI Landscape 2025–26",
    topics: ["Frontier models: GPT-4o, Claude 3.5/3.7 Sonnet, Gemini 2.0 Flash, Llama 3.3 70B, Mistral Large", "Reasoning models: o3, Claude 3.7 extended thinking, DeepSeek R1 — test-time compute scaling", "Multimodal: vision+text+audio in same model — GPT-4V, Gemini, Llama Vision", "MCP (Model Context Protocol): Anthropic's standard for tool/resource integration", "Vibe coding tools: Cursor, Devin, GitHub Copilot — know how they work under the hood"],
    practice: "Make a comparison table: 5 frontier models × 6 attributes (context window, pricing, strengths, weaknesses, best use case, API).",
    resource: "Latent Space podcast. Ahead of AI newsletter (Sebastian Raschka). LMSYS leaderboard.",
    tag: "Trends"
  },
  {
    phase: 3, phaseTitle: "GenAI & LLM Engineering", phaseColor: "#B388FF", day: 40,
    title: "Capstone Project — NL2SQL Agent v2",
    topics: ["Rebuild your NL2SQL multi-agent system with everything you've learned", "Components: schema retriever (RAG) + query planner + SQL executor + error corrector + explainer", "Add: LangSmith tracing, streaming output, RAGAS evaluation suite, Docker deployment", "README: architecture diagram, example queries, benchmark results"],
    practice: "This IS the day. Code from scratch. This is your #1 interview demo project.",
    resource: "Your existing code + LangGraph docs + RAGAS docs",
    tag: "Project"
  },
  // ── PHASE 4: INTERVIEW PREP ────────────────────────────────────
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 41,
    title: "DSA Blitz — Arrays & Strings",
    topics: ["Two pointers pattern: sorted arrays, palindromes, container with most water", "Sliding window: max subarray, longest substring without repeat", "Prefix sums: range queries in O(1)", "String manipulation: anagrams, palindromes, pattern matching"],
    practice: "LeetCode: Valid Palindrome, 3Sum, Longest Substring Without Repeating Characters, Minimum Window Substring. All with time complexity analysis.",
    resource: "NeetCode roadmap (neetcode.io) — follow the order exactly. Start with Arrays & Hashing.",
    tag: "DSA"
  },
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 42,
    title: "DSA Blitz — HashMaps & Stacks",
    topics: ["HashMap patterns: frequency count, grouping, two-sum variations", "Stack patterns: valid parentheses, monotonic stack, next greater element", "Queue: BFS pattern, sliding window maximum", "Heap: top-k elements, merge k sorted lists"],
    practice: "LeetCode: Group Anagrams, Top K Frequent Elements, Valid Parentheses, Daily Temperatures, Kth Largest Element.",
    resource: "NeetCode YouTube solutions for each problem — watch only after attempting",
    tag: "DSA"
  },
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 43,
    title: "DSA Blitz — Trees & Graphs",
    topics: ["Binary tree traversals: inorder, preorder, postorder (recursive + iterative)", "BFS with queue, DFS with stack/recursion", "Graph representations: adjacency list vs matrix", "Common patterns: level-order, lowest common ancestor, cycle detection"],
    practice: "LeetCode: Invert Binary Tree, Max Depth of Binary Tree, Number of Islands, Clone Graph, Course Schedule.",
    resource: "NeetCode Trees + Graphs section",
    tag: "DSA"
  },
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 44,
    title: "ML System Design",
    topics: ["Framework: Requirements → Data → Features → Model → Training → Serving → Monitoring", "Design: Recommendation system (like CrayFit — use your own project!)", "Design: Fraud detection system at scale", "Design: RAG chatbot with 1M documents", "Bottlenecks: latency, throughput, cost, cold start, data freshness"],
    practice: "Write a full system design doc (1 page) for a job recommendation engine. Include: feature store, model choice, serving strategy, monitoring.",
    resource: "Chip Huyen: Designing ML Systems (Ch.1–3 free online). Made With ML system design section.",
    tag: "System Design"
  },
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 45,
    title: "Behavioral Interview Prep",
    topics: ["STAR format: Situation, Task, Action, Result — keep each under 2 minutes", "Story: ChurnSense — problem, approach, technical decisions, results (0.88 AUC)", "Story: NL2SQL multi-agent — why multi-agent, how LangGraph helps, what broke first", "Story: Geany Softech internship — what you owned, impact, what you'd do differently", "Story: CrayFit — hybrid recommendation, patent filing experience"],
    practice: "Record yourself answering: 'Tell me about yourself', 'Hardest technical problem', 'Why AI/ML?', 'Where you failed'. Watch back. Cringe. Improve.",
    resource: "Nil — just practice out loud. Your voice and confidence matter more than content here.",
    tag: "Behavioral"
  },
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 46,
    title: "GenAI Interview Deep Dive Prep",
    topics: ["Be ready to explain: transformer attention from scratch on whiteboard", "Be ready to design: a RAG system given constraints (latency <200ms, 100k docs)", "Be ready to debug: 'my RAG keeps hallucinating — what would you check?'", "Be ready to compare: fine-tuning vs RAG vs prompting — when each approach", "Be ready to code: implement cosine similarity, BM25 scoring, simple agent loop"],
    practice: "Answer these 10 questions out loud: (1) What is temperature? (2) Explain attention. (3) RAG vs fine-tuning. (4) What is a vector database? (5) How does LoRA work? (6) What is a context window? (7) How do you evaluate an LLM? (8) What is LangGraph? (9) What causes hallucination? (10) How would you reduce LLM API costs in production?",
    resource: "Your own notes. Andrej Karpathy LLM video again.",
    tag: "Interview"
  },
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 47,
    title: "Portfolio Polish",
    topics: ["GitHub: 3 pinned repos with clean READMEs, architecture diagrams, GIF demos", "LinkedIn: headline = 'AI Engineer | LangGraph • RAG • MLOps | Graduating Jun 2026'", "Projects section: ChurnSense, NL2SQL Agent v2, CrayFit — each with 2-line description + tech stack", "HuggingFace profile: at least 1 model + 1 Gradio Space live", "Cold email template refresh: use your best-performing version"],
    practice: "Do it. Don't just plan it. Spend the full day on execution.",
    resource: "Nil",
    tag: "Portfolio"
  },
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 48,
    title: "Mock Interview Day",
    topics: ["Mock 1 (1 hr): DSA — 2 medium LeetCode problems under time pressure. Use a timer.", "Mock 2 (1 hr): ML system design — design a content moderation system using LLMs", "Mock 3 (30 min): Behavioral — full STAR answers for all 4 project stories"],
    practice: "Use Pramp.com or ask a friend. If solo: set a 35-min timer, no hints, write code in a blank file.",
    resource: "Pramp.com (free mock interviews). Interviewing.io (paid but worth it for a company you really want).",
    tag: "Mock"
  },
  {
    phase: 4, phaseTitle: "Interview Prep", phaseColor: "#FF6B6B", day: 49,
    title: "Final Review + Applications",
    topics: ["Revisit your weakest topic from the past 7 weeks. Fill that gap.", "Review your project list — can you explain all of them without notes?", "Send 10 targeted applications: Sarvam AI, Gnani.ai, Krutrim, Scale AI, AI startups you've been watching", "Write 3 personalized cold emails referencing specific company work"],
    practice: "Send the applications. Don't wait for perfection.",
    resource: "Your resume variants (DA/DS/GenAI/ML). Your best cold email template.",
    tag: "Applications"
  },
];

const phaseConfig = {
  1: { title: "Python From Scratch", color: "#FFB347", emoji: "🐍", days: "Days 1–14" },
  2: { title: "ML Fundamentals", color: "#64FFDA", emoji: "🧮", days: "Days 15–28" },
  3: { title: "GenAI & LLM Eng.", color: "#B388FF", emoji: "🧠", days: "Days 29–40" },
  4: { title: "Interview Prep", color: "#FF6B6B", emoji: "🎯", days: "Days 41–49" },
};

const tagColors = {
  Python: "#FFB347", "Python+DSA": "#FF8C42", NumPy: "#4ECDC4", Pandas: "#45B7D1",
  SQL: "#06D6A0", "Viz+EDA": "#FFD93D", ML: "#64FFDA", Math: "#95E1D3",
  DL: "#A8DADC", PyTorch: "#EE4266", NLP: "#C77DFF", Transformers: "#E0AAFF",
  HuggingFace: "#FFD166", Project: "#F72585", LLM: "#B388FF", Prompting: "#CE93D8",
  RAG: "#EA80FC", Agents: "#CCFF90", LangGraph: "#69FF47", "Fine-tuning": "#FF9E80",
  Evals: "#80D8FF", LLMOps: "#64FFDA", Trends: "#00E5FF", DSA: "#FF8A65",
  "System Design": "#FFD740", Behavioral: "#F8BBD0", Interview: "#B39DDB",
  Portfolio: "#A5D6A7", Mock: "#FF5252", Applications: "#90CAF9",
};

export default function DailyPlan() {
  const [selectedPhase, setSelectedPhase] = useState("all");
  const [expandedDay, setExpandedDay] = useState(1);
  const [completedDays, setCompletedDays] = useState(new Set());
  const [storageReady, setStorageReady] = useState(false);
  const [saveStatus, setSaveStatus] = useState(""); // "", "saving", "saved", "error"

  // Load progress from persistent storage on mount
  useEffect(() => {
    const load = async () => {
      try {
        const saved = localStorage.getItem("aditya-ai-plan-progress");
        if (saved) {
        setCompletedDays(new Set(JSON.parse(saved)));
        }
      } catch (_) {
        // No saved data yet — start fresh
      } finally {
        setStorageReady(true);
      }
    };
    load();
  }, []);

  // Save to persistent storage whenever completedDays changes (skip initial empty load)
  useEffect(() => {
    if (!storageReady) return;
    const save = async () => {
      setSaveStatus("saving");
      try {
        localStorage.setItem(
        "aditya-ai-plan-progress",
        JSON.stringify([...completedDays])
        );
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus(""), 1500);
      } catch (_) {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus(""), 2000);
      }
    };
    save();
  }, [completedDays, storageReady]);

  const filtered = selectedPhase === "all" ? schedule : schedule.filter(d => d.phase === parseInt(selectedPhase));

  const toggleComplete = (day, e) => {
    e.stopPropagation();
    setCompletedDays(prev => {
      const n = new Set(prev);
      n.has(day) ? n.delete(day) : n.add(day);
      return n;
    });
  };

  const progress = Math.round((completedDays.size / schedule.length) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060608",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      color: "#D4D4D4",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #222; }
        .day-row { transition: background 0.15s; cursor: pointer; }
        .day-row:hover { background: rgba(255,255,255,0.03) !important; }
        .phase-tab { transition: all 0.15s; cursor: pointer; border: none; }
        .check-btn { transition: all 0.2s; cursor: pointer; border: none; }
        .check-btn:hover { transform: scale(1.1); }
        @keyframes slideDown { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 600px; } }
        .slide-down { animation: slideDown 0.25s ease forwards; overflow: hidden; }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
      `}</style>

      {/* Header */}
      <div style={{ background: "#08080C", borderBottom: "1px solid #111", padding: "20px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: 3, lineHeight: 1, color: "#fff" }}>
                60-DAY AI ENGINEER
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: 3, lineHeight: 1, color: "#555" }}>
                DAILY SCHEDULE
              </div>
              <div style={{ fontSize: 11, color: "#333", marginTop: 6, letterSpacing: 2 }}>
                49 DAYS · 4–5 HRS/DAY · FROM SCRATCH
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: progress > 50 ? "#64FFDA" : "#FFB347" }}>
                {progress}%
              </div>
              <div style={{ fontSize: 10, color: "#333", letterSpacing: 2 }}>COMPLETE</div>
              <div style={{ width: 120, height: 3, background: "#111", borderRadius: 2, marginTop: 6 }}>
                <div style={{ width: `${progress}%`, height: "100%", background: "#64FFDA", borderRadius: 2, transition: "width 0.3s" }} />
              </div>
              <div style={{
                fontSize: 9, marginTop: 6, letterSpacing: 1,
                color: saveStatus === "saved" ? "#69FF47" : saveStatus === "saving" ? "#FFB347" : saveStatus === "error" ? "#FF5252" : "#1a1a1a",
                transition: "color 0.3s",
              }}>
                {saveStatus === "saving" ? "● SAVING..." : saveStatus === "saved" ? "✓ SAVED" : saveStatus === "error" ? "✗ SAVE FAILED" : !storageReady ? "LOADING..." : "●"}
              </div>
            </div>
          </div>

          {/* Phase tabs */}
          <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
            {[["all", "All 49 Days", "#555"], ...Object.entries(phaseConfig).map(([k, v]) => [k, `${v.emoji} ${v.title}`, v.color])].map(([key, label, color]) => (
              <button
                key={key}
                className="phase-tab"
                onClick={() => setSelectedPhase(key)}
                style={{
                  padding: "5px 12px", borderRadius: 3, fontSize: 10, letterSpacing: 1,
                  background: selectedPhase === key ? `${color}22` : "transparent",
                  border: `1px solid ${selectedPhase === key ? color + "66" : "#1a1a1a"}`,
                  color: selectedPhase === key ? color : "#333",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Day list */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "12px 24px 48px" }}>
        {filtered.map((day) => {
          const isExpanded = expandedDay === day.day;
          const isDone = completedDays.has(day.day);
          const pc = phaseConfig[day.phase];

          return (
            <div key={day.day} style={{ marginBottom: 4 }}>
              {/* Day row */}
              <div
                className="day-row"
                onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 12px", borderRadius: 6,
                  background: isExpanded ? "#0e0e14" : "transparent",
                  border: isExpanded ? `1px solid ${pc.color}22` : "1px solid transparent",
                  opacity: isDone ? 0.45 : 1,
                }}
              >
                {/* Check button */}
                <button
                  className="check-btn"
                  onClick={(e) => toggleComplete(day.day, e)}
                  style={{
                    width: 20, height: 20, borderRadius: 3, flexShrink: 0,
                    background: isDone ? pc.color : "transparent",
                    border: `1px solid ${isDone ? pc.color : "#2a2a2a"}`,
                    color: "#000", fontSize: 11, fontWeight: 700,
                  }}
                >
                  {isDone ? "✓" : ""}
                </button>

                {/* Day number */}
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif", fontSize: 18,
                  color: pc.color, minWidth: 32, lineHeight: 1,
                }}>
                  {String(day.day).padStart(2, "0")}
                </div>

                {/* Day label */}
                <div style={{ fontSize: 10, color: "#333", minWidth: 90, letterSpacing: 1 }}>
                  DAY {day.day}
                </div>

                {/* Tag */}
                <div style={{
                  fontSize: 9, padding: "2px 7px", borderRadius: 2, flexShrink: 0,
                  background: `${tagColors[day.tag] || "#888"}18`,
                  color: tagColors[day.tag] || "#888",
                  border: `1px solid ${tagColors[day.tag] || "#888"}33`,
                  letterSpacing: 1, minWidth: 72, textAlign: "center",
                }}>
                  {day.tag}
                </div>

                {/* Title */}
                <div style={{ fontSize: 13, color: isExpanded ? "#fff" : "#888", flex: 1, lineHeight: 1.3 }}>
                  {day.title}
                </div>

                {/* Expand indicator */}
                <div style={{ fontSize: 10, color: "#333" }}>{isExpanded ? "▲" : "▼"}</div>
              </div>

              {/* Expanded content */}
              {isExpanded && (
                <div className="slide-down" style={{
                  background: "#0a0a10",
                  border: `1px solid ${pc.color}18`,
                  borderTop: "none",
                  borderRadius: "0 0 6px 6px",
                  padding: "16px 16px 16px 64px",
                  marginBottom: 4,
                }}>
                  {/* Topics */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 9, letterSpacing: 3, color: "#333", marginBottom: 8, textTransform: "uppercase" }}>What to learn</div>
                    {day.topics.map((t, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 6, alignItems: "flex-start" }}>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: pc.color, marginTop: 6, flexShrink: 0 }} />
                        <div style={{ fontSize: 12, color: "#AAA", lineHeight: 1.7 }}>{t}</div>
                      </div>
                    ))}
                  </div>

                  {/* Practice */}
                  <div style={{
                    background: `${pc.color}08`, border: `1px solid ${pc.color}20`,
                    borderRadius: 4, padding: "10px 14px", marginBottom: 12,
                  }}>
                    <div style={{ fontSize: 9, letterSpacing: 3, color: pc.color, marginBottom: 6, textTransform: "uppercase" }}>⚡ Practice</div>
                    <div style={{ fontSize: 12, color: "#888", lineHeight: 1.7 }}>{day.practice}</div>
                  </div>

                  {/* Resource */}
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 9, letterSpacing: 3, color: "#333", textTransform: "uppercase", flexShrink: 0, marginTop: 1 }}>📖 Resource:</div>
                    <div style={{ fontSize: 11, color: "#555", lineHeight: 1.6 }}>{day.resource}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* End card */}
        <div style={{
          marginTop: 24, padding: "20px", borderRadius: 6,
          border: "1px solid #1a1a1a", textAlign: "center",
        }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#333", letterSpacing: 3 }}>
            END OF ROADMAP — DEGREE + OFFERS 🎓
          </div>
          <div style={{ fontSize: 11, color: "#222", marginTop: 4 }}>
            tick every box. that's the whole plan.
          </div>
        </div>
      </div>
    </div>
  );
}