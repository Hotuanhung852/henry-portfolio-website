import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Header
      home: "Home",
      about: "About",
      projects:"Projects",
      skills:"Skills",
      experience:"Experience",
      contact:"Contact",
      // Language button
      switchLanguage: "Switch to Vietnamese",
      // Theme button
      switchToDark: "Switch to dark mode",
      switchToLight: "Switch to light mode",
      // Introduction
      greeting: "Hi, I'm Henry!",
      introLine1: "I'm a",
      introLine2: "with a passion for building",
      introLine3: " I enjoy sketching and building",
      introLine4: "for users. My focus is on",
      softwareEngineer: "software engineer",
      userFriendly: "user-friendly",
      applications: "applications",
      sketchingBuilding: "sites",
      focusOn: "React (Next.js)",
      contactMeHere: "Contact me here",
      downloadCV: "Download CV",
      // About
      aboutHeading: "About Me",
      fptUniversity: "FPT University",
      htmlCssJsReact: "HTML, CSS, JavaScript, and React",
      figma: "Figma",
      whatExcites: "What excites me most about coding",
      fullTimeFrontend: "full-time front-end developer role",
      outsideCoding: "Outside of coding",
      uxPrinciples: "UX principles and motion design",
      productivity: "personal productivity and digital storytelling",
      laptopSetups: "laptop setups",
      workspaceBoost: "curating my workspace to boost focus and inspiration",
      paragraph1Start: "I'm currently a student at",
      graduateFoundation: "preparing to graduate with a decent foundation in front-end development. Over the past few years, I've honed my skills in",
      workedExtensively: "and I've also worked extensively with",
      designInterfaces: "to design intuitive user interfaces.",
      isCreativeProcess: "is the creative process of turning ideas into interactive experiences. I enjoy crafting clean, responsive designs and continuously improving my workflow. I'm eager to join a dynamic team in a",
      whereGrow: "where I can grow and contribute meaningfully.",
      paragraph2Start: "I enjoy watching tech reviews and staying updated with front-end trends through social media. I'm currently expanding my knowledge in",
      occasionally: "and I'm also learning more about",
      enhance: "to enhance both my technical and creative toolkit. I have a passion for",
      workspaceBoostExtended: "curating my workspace to boost focus and inspiration as well as increase productivity and optimization ╰ (´꒳`) ╯.",
      // Projects
      myProjects:"My Projects",
      pawtimeDesc:"A web platform for pet care and adoption services, focused on transparency, comfort, and animal well-being.",
      sjcpTitle:"Seasonal Job Connection Platform",
      sjcpDesc:"The SJCP platform simplifies hiring for short-term, high-demand jobs using tech-driven solutions for busy seasons.",
      quanghuyDesc:"A website for my father's business, specializing in high-quality photocopy and printing services, with additional support for airfare pricing and exciting tour packages.",
      // Skills
      mySkills:"My Skills",
      // Experience
      myExperience:"My Experience",
      experienceTitle01:"Front-End Intern",
      experienceTitle02:"Technical Support & Video Editor",
      experienceTitle03:"Graduated FPT University",
      experienceLocation01:"FPT Software, Vietnam",
      experienceLocation02:"Khanh Bang Co., Ltd",
      experienceLocation03:"Vietnam",
      experienceDesc01:"Completed a 6-month internship as a front-end developer, gaining hands-on experience with modern web technologies.",
      experienceDesc02:"Technical support using WordPress and assisted with video editing tasks, contributing to multimedia content.",
      experienceDesc03:"Earned a Bachelor's degree from FPT University, solidifying my foundation in software development and engineering.",
      // Contact Me
      contactMe:"Contact Me",
      reachOut:"Please feel free to reach out to me via email at ",
      throughForm:"or through this form.",
      submitEmailbtn:"Submit",
      emailSuccess: "Email sent successfully!",
      yourEmail:"Your email",
      yourMessage:"Your message",
      // Footer
      rightsReserved:"All rights reserved.",
      aboutWebsite:"About this website",
      footerDesc:"Built with React and Next.js. Using Typescript, Tailwind CSS, Framer Motion, others third party such as React Email, Resend and Vercel for deployment."
    },
  },
  vi: {
    translation: {
      // Header
      home: "Trang chủ",
      about: "Giới thiệu",
      projects:"Dự án",
      skills:"Kỹ năng",
      experience:"Kinh nghiệm",
      contact:"Liên lạc",
      // Language button
      switchLanguage: "Chuyển sang Tiếng Anh",
      // Theme button
      switchToDark: "Chuyển sang chế độ tối",
      switchToLight: "Chuyển sang chế độ sáng",
      // Introduction
      greeting: "Xin chào, mình là Henry!",
      introLine1: "Mình là",
      introLine2: "với đam mê xây dựng ứng dụng",
      introLine3: " Mình thích phác thảo và xây dựng",
      introLine4: "cho người dùng. Tiêu điểm của mình là",
      softwareEngineer: "kỹ sư phần mềm",
      userFriendly: "thân thiện với người dùng.",
      applications: "",
      sketchingBuilding: "trang web",
      focusOn: "React (Next.js)",
      contactMeHere: "Liên hệ với mình tại đây",
      downloadCV: "Tải xuống CV",
      // About
      aboutHeading: "Về tôi",
      fptUniversity: "Đại học FPT",
      htmlCssJsReact: "HTML, CSS, JavaScript và React",
      figma: "Figma",
      whatExcites: "Điều làm mình phấn khích nhất về lập trình",
      fullTimeFrontend: "vai trò lập trình viên front-end toàn thời gian",
      outsideCoding: "Ngoài việc lập trình",
      uxPrinciples: "các nguyên lý UX và thiết kế chuyển động",
      productivity: "năng suất cá nhân và kể chuyện kỹ thuật số",
      laptopSetups: "các góc setup laptop,",
      workspaceBoost: "sắp xếp không gian làm việc để tăng sự tập trung và cảm hứng",
      paragraph1Start: "Mình hiện là sinh viên tại",
      graduateFoundation: "chuẩn bị tốt nghiệp với nền tảng kiến thức vững chắc về phát triển front-end. Trong những năm qua, mình đã hoàn thiện kỹ năng của mình trong",
      workedExtensively: "đồng thời làm việc rộng rãi với",
      designInterfaces: "để thiết kế giao diện người dùng trực quan.",
      isCreativeProcess: "là quá trình sáng tạo chuyển đổi ý tưởng thành những trải nghiệm tương tác. Mình thích tạo ra các thiết kế sạch sẽ, đáp ứng và liên tục cải thiện quy trình làm việc của mình. Mình mong muốn gia nhập một đội ngũ năng động trong",
      whereGrow: "nơi mình có thể phát triển và đóng góp một cách có ý nghĩa.",
      paragraph2Start: "mình thích xem các bài đánh giá công nghệ và cập nhật các xu hướng front-end qua mạng xã hội. Hiện tại, mình đang mở rộng kiến thức về",
      occasionally: "đồng thời tìm hiểu thêm về",
      enhance: "để nâng cao cả kỹ năng kỹ thuật lẫn sáng tạo. Mình có niềm đam mê với",
      workspaceBoostExtended: "luôn chăm chút không gian làm việc để tăng sự tập trung, cảm hứng và tối ưu hiệu suất ╰ (´꒳`) ╯.",
      // Projects
      myProjects:"Dự án của tôi",
      pawtimeDesc:"Một nền tảng web dành cho dịch vụ chăm sóc và nhận nuôi thú cưng, tập trung vào sự minh bạch, thoải mái và phúc lợi động vật.",
      sjcpTitle:"Nền tảng kết nối việc làm thời vụ",
      sjcpDesc:"Nền tảng SJCP giúp đơn giản hóa việc tuyển dụng cho các công việc ngắn hạn, có nhu cầu cao bằng các giải pháp công nghệ trong mùa cao điểm.",
      quanghuyDesc:"Một trang web dành cho doanh nghiệp của ba tôi, chuyên cung cấp dịch vụ photocopy và in ấn chất lượng cao, đồng thời hỗ trợ thông tin giá vé máy bay và các tour du lịch hấp dẫn.",
      // Skills
      mySkills:"Kỹ năng của tôi",
      // Experience
      myExperience:"Kinh nghiệm của tôi",
      experienceTitle01:"Thực tập sinh Front-End",
      experienceTitle02:"Hỗ trợ kỹ thuật & Biên tập video",
      experienceTitle03:"Tốt nghiệp Đại học FPT, Việt Nam",
      experienceLocation01:"FPT Software, Việt Nam",
      experienceLocation02:"Công ty TNHH Khánh Bằng",
      experienceLocation03:"Việt Nam",
      experienceDesc01:"Hoàn thành kỳ thực tập 6 tháng với vai trò lập trình viên front-end, tích lũy kinh nghiệm thực tế với các công nghệ web hiện đại.",
      experienceDesc02:"Hỗ trợ kỹ thuật qua WordPress và hỗ trợ chỉnh sửa video, đóng góp vào nội dung đa phương tiện.",
      experienceDesc03:"Tốt nghiệp cử nhân tại Đại học FPT, củng cố nền tảng về phát triển phần mềm và kỹ thuật.",
      // Contact Me
      contactMe:"Liên lạc tôi",
      reachOut:"Hãy thoải mái liên hệ với mình qua email tại ",
      throughForm:"hoặc thông qua biểu mẫu này.",
      submitEmailbtn:"Gửi ",
      emailSuccess: "Đã gửi email thành công!",
      yourEmail:"Email của bạn",
      yourMessage:"Tin nhắn của bạn",
      // Footer
      rightsReserved:"Đã đăng ký bản quyền.",
      aboutWebsite:"Về trang web này:",
      footerDesc:"Được xây dựng bằng React và Next.js. Sử dụng Typescript, Tailwind CSS, Framer Motion, cùng các bên thứ ba khác như React Email, Resend và Vercel để triển khai."
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;