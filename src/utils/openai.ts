import OpenAI from 'openai';

let openAi: OpenAI;

export const generateArticle = async (title: string, description: string) => {
  if (!import.meta.env.VITE_OPEN_AI_KEY) {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`# My Favorite Books

        ## Fiction
        
        - **To Kill a Mockingbird** by Harper Lee
          - A novel about the serious issues of rape and racial inequality.
        - **1984** by George Orwell
          - A dystopian novel set in a totalitarian society ruled by Big Brother.
        
        ## Non-Fiction
        
        - **Sapiens: A Brief History of Humankind** by Yuval Noah Harari
          - Explores the history and impact of Homo sapiens.
        - **Educated** by Tara Westover
          - A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education.
        
        ## Science Fiction
        
        - **Dune** by Frank Herbert
          - A science fiction saga about politics, religion, and power.
        - **Neuromancer** by William Gibson
          - A novel that helped define the cyberpunk genre.
        
        ## Fantasy
        
        - **The Hobbit** by J.R.R. Tolkien
          - A fantasy novel about the adventures of Bilbo Baggins.
        - **Harry Potter and the Sorcerer's Stone** by J.K. Rowling
          - The first book in the Harry Potter series, introducing the world of magic.
        
        ## Mystery
        
        - **The Girl with the Dragon Tattoo** by Stieg Larsson
          - A mystery novel about a journalist and a hacker who investigate a disappearance.
        - **Gone Girl** by Gillian Flynn
          - A thriller about the mysterious disappearance of a woman and the media frenzy that follows.
        
        `);
      }, 2000);
    });
  }

  if (!openAi) {
    openAi = new OpenAI({
      apiKey: import.meta.env.VITE_OPEN_AI_KEY,
      dangerouslyAllowBrowser: true,
    });
  }
  const result = await openAi.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are a helpful assistant designed to assist users in creating engaging content, such as blogs, articles, or any written material.`,
      },
      {
        role: 'user',
        content: `
        Please create an article based on the 
        following information. Here is the list
        of information: 
        \ntitle: ${title}
        \ndescription: ${description}
        \nRemember the post should be based on the information that I have mentioned above. Output
        should be Markdown text format strictly.`,
      },
    ],
  });
  return result.choices[0].message.content;
};
