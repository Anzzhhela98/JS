function postCreater() {
    class Post {
        constructor(title, content) {
            this.title = title
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comments) {
            return this.comments.push(` * ${comments}`);
        }
        toString() {
            let result = super.toString()
            let raiting = `Rating: ${this.likes-this.dislikes}`;
            let allComments = this.comments.length > 0 ? `Comments:\n${this.comments.join('\n')}` : '';

            return [result, raiting, allComments].join('\n').trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }
        toString() {
            return `${super.toString()}\nViews: ${this.views}`
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}
const p = new BlogPost('TITLE', 'Content', 2)

p.view()
p.view()

console.log(p.toString());