export const baseBlogURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/blog-posts`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const baseAboutURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/contact-me`;
