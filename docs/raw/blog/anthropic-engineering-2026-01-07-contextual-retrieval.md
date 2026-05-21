# Introducing Contextual Retrieval

- **Source**: Anthropic-Engineering
- **Date**: 2026-01-07
- **URL**: https://www.anthropic.com/engineering/contextual-retrieval

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Introducing Contextual Retrieval

Published 
Sep 19, 2024

For an AI model to be useful in specific contexts, it often needs access to background knowledge. 

For an AI model to be useful in specific contexts, it often needs access to background knowledge. For example, customer support chatbots need knowledge about the specific business they&#x27;re being used for, and legal analyst bots need to know about a vast array of past cases.

Developers typically enhance an AI model&#x27;s knowledge using Retrieval-Augmented Generation (RAG). RAG is a method that retrieves relevant information from a knowledge base and appends it to the user&#x27;s prompt, significantly enhancing the model&#x27;s response. The problem is that traditional RAG solutions remove context when encoding information, which often results in the system failing to retrieve the relevant information from the knowledge base.

In this post, we outline a method that dramatically improves the retrieval step in RAG. The method is called “Contextual Retrieval” and uses two sub-techniques: Contextual Embeddings and Contextual BM25. This method can reduce the number of failed retrievals by 49% and, when combined with reranking, by 67%. These represent significant improvements in retrieval accuracy, which directly translates to better performance in downstream tasks. 

You can easily deploy your own Contextual Retrieval solution with Claude with 
our cookbook
.

A note on simply using a longer prompt

Sometimes the simplest solution is the best. If your knowledge base is smaller than 200,000 tokens (about 500 pages of material), you can just include the entire knowledge base in the prompt that you give the model, with no need for RAG or similar methods.

A few weeks ago, we released 
prompt caching
 for Claude, which makes this approach significantly faster and more cost-effective. Developers can now cache frequently used prompts between API calls, reducing latency by &gt; 2x and costs by up to 90% (you can see how it works by reading our 
prompt caching cookbook
).

However, as your knowledge base grows, you&#x27;ll need a more scalable solution. That’s where Contextual Retrieval comes in.

A primer on RAG: scaling to larger knowledge bases

For larger knowledge bases that don&#x27;t fit within the context window, RAG is the typical solution. RAG works by preprocessing a knowledge base using the following steps:

Break down the knowledge base (the “corpus” of documents) into smaller chunks of text, usually no more than a few hundred tokens;

Use an embedding model to convert these chunks into vector embeddings that encode meaning;

Store these embeddings in a vector database that allows for searching by semantic similarity.

At runtime, when a user inputs a query to the model, the vector database is used to find the most relevant chunks based on semantic similarit
