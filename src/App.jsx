
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Nguyễn Trọng Quốc</h1>
        <p className="text-lg">Chuyên viên lập trình game Unity</p>
        <p className="mt-2">📧 ntq.quoc@gmail.com | 📱 0906864086 | 📍 Vĩnh Long</p>
        <a href="https://www.facebook.com/qnt.quoc" className="text-blue-600 underline" target="_blank">Facebook cá nhân</a>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎯 Giới thiệu</h2>
        <p>
          Tôi là lập trình viên game với hơn <strong>12 năm kinh nghiệm</strong> phát triển các tựa game di động trên nền tảng <strong>Unity</strong>.
          Từng làm việc tại Topebox – công ty top đầu về game mobile tại Việt Nam, với nhiều sản phẩm được Apple/Google đề cử và vươn ra thị trường quốc tế.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧠 Kỹ năng</h2>
        <ul className="list-disc list-inside">
          <li>Ngôn ngữ: C++, C#</li>
          <li>Game Engine: Unity (chuyên sâu)</li>
          <li>Công cụ: Git, cấu trúc dữ liệu, giải thuật</li>
          <li>Kỹ năng mềm: Giao tiếp, giải quyết vấn đề, tự học</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎓 Học vấn</h2>
        <p><strong>Đại học Mở TP. Hồ Chí Minh</strong> (2008 – 2012)<br/>Cử nhân Công nghệ Thông Tin</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🕹️ Dự án tiêu biểu</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Sky Dancer: Free Falling</h3>
            <p>📅 2015 – 2017 | 🛠 Unity</p>
            <p>Endless runner kết hợp nhảy dù, đồ họa tối giản, thư giãn.</p>
            <p><a href="https://apps.apple.com/us/app/sky-dancer-free-falling/id1145532511" className="text-blue-600 underline" target="_blank">Link iOS</a> | <a href="https://youtu.be/gKfMxwaW9CI" className="text-blue-600 underline" target="_blank">Video</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Ark Rivals</h3>
            <p>📅 2017 – 2022 | 🛠 Unity</p>
            <p>Game chiến thuật NFT – User Generated Content.</p>
            <p><a href="https://apps.apple.com/vn/app/ark-rivals/id1402391695" className="text-blue-600 underline" target="_blank">Link iOS</a> | <a href="https://youtu.be/EtITsLwzFCU" className="text-blue-600 underline" target="_blank">Video</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Mimiland</h3>
            <p>📅 2022 – 2024 | 🛠 Unity</p>
            <p>Game nhập vai khám phá thế giới ảo Việt Nam.</p>
            <p><a href="https://apps.apple.com/vn/app/mimiland/id1660327908" className="text-blue-600 underline" target="_blank">Link iOS</a> | <a href="https://www.youtube.com/watch?v=GmbFXeIVoWk" className="text-blue-600 underline" target="_blank">Video</a></p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">⚙️ Các sản phẩm khác</h2>
        <ul className="list-disc list-inside">
          <li>Pocket Army – Game chiến thuật thời gian thực</li>
          <li>Century City – Game mô phỏng xây dựng</li>
          <li>Politaire – Game bài (Top game Apple 2016)</li>
          <li>King Rivals, Beetle.io, Gun & Dungeons – Game hành động (Google đề cử 2022)</li>
        </ul>
      </section>
    </div>
  );
}
