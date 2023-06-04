<template>
  <!-- Start: LineCode -->
  <div class="fs-6">
    <!-- Start: User -->
    <code>
      <span style="color: rgb(21, 251, 1); background-color: rgba(255, 255, 255, 0);">root@0x13v</span>
      <code style="font-size: 14px;font-weight: bold;text-decoration:  underline;">
        <strong><span
            style="color: rgb(249, 255, 249); background-color: rgba(255, 255, 255, 0);">&nbsp;$</span></strong>
      </code>
    </code>
    <!-- End: User -->
    <input type="text" v-model="inputValue" ref="inputField" class="border-0 flex-shrink-0"
      style="color: rgb(128,128,128);background: rgb(0,0,0);border: none;outline: 0;width: 60%;margin-left: 10px;"
      name="input" autofocus="" readonly="">
  </div>
  <!-- End: LineCode -->


  <!-- Start: MD Section -->
  <div v-if="showData" class="font-monospace fs-6" style="color: rgb(16,243,1);text-align: left;margin-top: 10px;">
    <div class="table-responsive font-monospace fs-6 fw-bold">
      <table class="table table-sm table-borderless">

        <tbody>

          <tr v-for='blog in jsonfiledata[$route.query.datasearch||"blogs"]' :key="blog.id">
            <td class="font-monospace" style="color: rgb(10,213,0);"><a @click="viewBlog(blog)"
                style="color: rgb(12,232,1);">{{ blog.title }}</a></td>

            <td v-if="blog.tags" class="font-monospace" style="color: rgb(10,213,0);"><a style="margin-right: 10px;"
                v-for="tag in blog.tags">{{tag}}</a></td>
            <td v-else class="font-monospace" style="color: rgb(10,213,0);">-</td>
            <td class="font-monospace" style="color: rgb(10,213,0);">{{blog.description || '-'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div><!-- End: MD Section -->
</template>

<script>
  import jsonfile from '@/assets/sitedata.json';

  export default {

    data() {
      return {
        jsonfile: [],
        inputValue: "",
        typingdone: false,
        showData:false
      };
    },

    computed: {
      jsonfiledata() {
        return this.jsonfile;
      }
    },

    mounted() {
      if (this.$route.query.datasearch) {
        this.typeInputValueSlowly("ls -l " + this.$route.query.datasearch);
      } else {
        this.typeInputValueSlowly("ls -l ");
      }

    },
    watch: {
      '$route.query.datasearch'(newValue, oldValue) {
        this.handleDatasearchChange(newValue);
      }
    },
    methods: {
      handleDatasearchChange(value) {
        // Perform actions based on the datasearch query parameter change
        if (value) {
          this.typeInputValueSlowly("ls -l " + value);
        } else {
          this.typeInputValueSlowly("ls -l ");
        }
      },
      viewBlog(blog) {
        const {
          linkofrowdata,
          title
        } = blog;
        const encodedUrl = btoa(linkofrowdata);

        this.$router.push({
          name: 'blog-view',
          params: {
            url: encodedUrl,
            title: title
          }
        });
      },
      typeInputValueSlowly(value) {
        this.showData=false;
        const typingSpeed = 50; // Adjust typing speed (in milliseconds)

        let currentCharIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentCharIndex <= value.length) {
            this.inputValue = value.substr(0, currentCharIndex);
            this.$refs.inputField.focus();
            currentCharIndex++;
          } else {
            clearInterval(typingInterval);
            this.wait(1000).then(() => {
              this.jsonfile = jsonfile;
              this.showData=true
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