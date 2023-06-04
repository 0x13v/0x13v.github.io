<template>
                <!-- Start: LineCode -->
                <div class="fs-6">
                    <!-- Start: User -->
                    <code>
                        <span style="color: rgb(21, 251, 1); background-color: rgba(255, 255, 255, 0);">root@0x13v</span>
                            <code style="font-size: 14px;font-weight: bold;text-decoration:  underline;">
                                <strong><span style="color: rgb(249, 255, 249); background-color: rgba(255, 255, 255, 0);">&nbsp;$</span></strong>
                            </code>
                    </code>
                    <!-- End: User -->
                    <input type="text" v-model="inputValue" ref="inputField"  class="border-0 flex-shrink-0" 
                        style="color: rgb(128,128,128);background: rgb(0,0,0);border: none;outline: 0;width: 60%;margin-left: 10px;"
                        name="input"  autofocus="" readonly="">
                </div>
                <!-- End: LineCode -->
                
                
                <!-- Start: MD Section -->
                <div v-html="displayedContent" class="font-monospace fs-6" style="color: rgb(16,243,1);text-align: left;margin-top: 10px;">
                </div>
                <!-- End: MD Section -->
</template>


<script>
import { marked } from 'marked';

export default {
  data() {
    return {
      markdownFile: 'https://raw.githubusercontent.com/0x13v/0x13v/main/README.md',
      markdownContent: '',
      htmlContent: '',
      displayedContent: '',
      inputValue: "",
    };
  },
  mounted() {
    this.typeInputValueSlowly("cat info.md");
  },
  methods: {
    fetchMarkdownData() {
      fetch(this.markdownFile)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching Markdown data');
          }
          return response.text();
        })
        .then(data => {
          this.markdownContent = data;
          this.convertMarkdownToHtml();
        })
        .catch(error => {
          console.error(error);
        });
    },
    convertMarkdownToHtml() {
      this.htmlContent = marked(this.markdownContent);
      this.typeContentSlowly();
    },
    typeContentSlowly() {
      const typingSpeed = 10; // Adjust typing speed (in milliseconds)

      let currentCharIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentCharIndex <= this.htmlContent.length) {
          this.displayedContent = this.htmlContent.substr(0, currentCharIndex);
          currentCharIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    },

    typeInputValueSlowly(value) {
      const typingSpeed = 50; // Adjust typing speed (in milliseconds)

      let currentCharIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentCharIndex <= value.length) {
          this.inputValue = value.substr(0, currentCharIndex);
          this.$refs.inputField.focus();
          currentCharIndex++;
        } else {
          clearInterval(typingInterval);
          this.wait(1000).then(()=>{
            this.fetchMarkdownData();
          });
        }
      }, typingSpeed);
    },
    wait(duration) {
      return new Promise(resolve => {
        setTimeout(resolve, duration);
      });
    },
  }
};
</script>
