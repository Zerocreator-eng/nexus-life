const { createApp } = Vue;
createApp({
    data() {
        return {
            name: "",
            topic: "",
            comment: "",
            comments: []
        };
    },
    methods: {
        addComment() {
            if (
                this.name === "" ||
                this.topic === "" ||
                this.comment === ""
            ) {
                alert("Please fill in all fields.");
                return;
            }
            this.comments.push({
                name: this.name,
                topic: this.topic,
                comment: this.comment
            });
            this.name = "";
            this.topic = "";
            this.comment = "";
        },
        deleteComment(index) {
            this.comments.splice(index, 1);
        }
    }

}).mount("#app");
