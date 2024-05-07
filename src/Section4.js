const Section4 = () => {
  return (
    <div className="flex justify-evenly">
      <div className="self-center">
        <button class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <i class="fas fa-house"></i>
          <span class="ml-2">Company Name</span>
        </button>
        <p class="text-lg text-center text-green-500 font-bold">
          Let's grow together!
        </p>
        <div className="flex gap-2">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-square-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kishan-rajput-6b7ab3179/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div>
        <table class="border-collapse">
          <tr>
            <td>Company</td>
            <td>Resources</td>
            <td>Quick Links</td>
            <td>More</td>
          </tr>
          <tr>
            <td>Company1</td>
            <td>Resources1</td>
            <td>Link1</td>
            <td>More1</td>
          </tr>
          <tr>
            <td>Company2</td>
            <td>Resources2</td>
            <td>Link2</td>
            <td>More2</td>
          </tr>
          <tr>
            <td>Company3</td>
            <td>Resources3</td>
            <td>Link3</td>
            <td>More3</td>
          </tr>
          <tr>
            <td>Company4</td>
            <td>Resources4</td>
            <td>Link4</td>
            <td>More4</td>
          </tr>
          <tr>
            <td>Company5</td>
            <td>Resources5</td>
            <td>Link5</td>
            <td>More5</td>
          </tr>
          <tr>
            <td>Company6</td>
            <td>Resources6</td>
            <td>Link6</td>
            <td>More6</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Section4;
