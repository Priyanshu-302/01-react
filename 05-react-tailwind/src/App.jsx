import React from "react";
import Card from "./components/Card";

const App = () => {
  const usersData = [
    {
      bgImage: "https://picsum.photos/id/1011/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      userName: "Arjun Verma",
      userDescription: "Full Stack Developer | Node.js & MongoDB Enthusiast",
      likesCount: "72.9K",
      postCount: "828",
      viewsCount: "342.9K",
    },
    {
      bgImage: "https://picsum.photos/id/1012/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      userName: "Riya Sharma",
      userDescription: "Frontend Developer | React & UI Designer",
      likesCount: "54.2K",
      postCount: "612",
      viewsCount: "210.3K",
    },
    {
      bgImage: "https://picsum.photos/id/1013/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      userName: "Kabir Singh",
      userDescription: "Backend Engineer | PostgreSQL & System Design",
      likesCount: "88.1K",
      postCount: "947",
      viewsCount: "401.7K",
    },
    {
      bgImage: "https://picsum.photos/id/1014/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
      userName: "Meera Kapoor",
      userDescription: "UI/UX Designer | Figma Expert",
      likesCount: "39.8K",
      postCount: "433",
      viewsCount: "167.2K",
    },
    {
      bgImage: "https://picsum.photos/id/1015/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
      userName: "Dev Malhotra",
      userDescription: "JavaScript Wizard | Open Source Contributor",
      likesCount: "92.4K",
      postCount: "1021",
      viewsCount: "512.6K",
    },
    {
      bgImage: "https://picsum.photos/id/1016/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
      userName: "Ananya Roy",
      userDescription: "Tech Blogger | AI & ML Explorer",
      likesCount: "67.5K",
      postCount: "589",
      viewsCount: "298.4K",
    },
    {
      bgImage: "https://picsum.photos/id/1018/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
      userName: "Rohan Das",
      userDescription: "DevOps Engineer | Cloud & Docker",
      likesCount: "45.7K",
      postCount: "371",
      viewsCount: "184.9K",
    },
    {
      bgImage: "https://picsum.photos/id/1020/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
      userName: "Sneha Iyer",
      userDescription: "Mobile App Developer | Flutter",
      likesCount: "58.3K",
      postCount: "644",
      viewsCount: "276.5K",
    },
    {
      bgImage: "https://picsum.photos/id/1024/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
      userName: "Aditya Mehta",
      userDescription: "Competitive Programmer | 400+ DSA Problems",
      likesCount: "76.2K",
      postCount: "703",
      viewsCount: "355.1K",
    },
    {
      bgImage: "https://picsum.photos/id/1025/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
      userName: "Pooja Nair",
      userDescription: "Cybersecurity Analyst | Ethical Hacker",
      likesCount: "61.9K",
      postCount: "521",
      viewsCount: "249.8K",
    },
    {
      bgImage: "https://picsum.photos/id/1033/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
      userName: "Rahul Bansal",
      userDescription: "Startup Founder | SaaS Builder",
      likesCount: "110.4K",
      postCount: "1189",
      viewsCount: "620.2K",
    },
    {
      bgImage: "https://picsum.photos/id/1035/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
      userName: "Ishita Jain",
      userDescription: "Data Scientist | Python & Pandas",
      likesCount: "84.7K",
      postCount: "874",
      viewsCount: "392.6K",
    },
    {
      bgImage: "https://picsum.photos/id/1037/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
      userName: "Manav Kulkarni",
      userDescription: "AI Engineer | Deep Learning",
      likesCount: "95.3K",
      postCount: "1033",
      viewsCount: "540.9K",
    },
    {
      bgImage: "https://picsum.photos/id/1040/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
      userName: "Tanya Choudhary",
      userDescription: "Product Manager | Agile & Scrum",
      likesCount: "48.6K",
      postCount: "466",
      viewsCount: "201.4K",
    },
    {
      bgImage: "https://picsum.photos/id/1043/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
      userName: "Siddharth Rao",
      userDescription: "Blockchain Developer | Web3",
      likesCount: "73.8K",
      postCount: "689",
      viewsCount: "333.7K",
    },
    {
      bgImage: "https://picsum.photos/id/1050/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
      userName: "Kritika Sen",
      userDescription: "Content Creator | Tech Reviews",
      likesCount: "59.1K",
      postCount: "602",
      viewsCount: "287.5K",
    },
    {
      bgImage: "https://picsum.photos/id/1052/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
      userName: "Vikram Joshi",
      userDescription: "Game Developer | Unity & Unreal",
      likesCount: "82.6K",
      postCount: "745",
      viewsCount: "366.3K",
    },
    {
      bgImage: "https://picsum.photos/id/1060/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
      userName: "Neha Arora",
      userDescription: "QA Engineer | Automation Testing",
      likesCount: "41.2K",
      postCount: "398",
      viewsCount: "172.9K",
    },
    {
      bgImage: "https://picsum.photos/id/1067/800/400",
      profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
      userName: "Yash Patel",
      userDescription: "Cloud Architect | AWS & GCP",
      likesCount: "97.4K",
      postCount: "1094",
      viewsCount: "578.8K",
    },
    {
      bgImage: "https://picsum.photos/id/1074/800/400",
      profileImage: "https://randomuser.me/api/portraits/women/20.jpg",
      userName: "Aditi Khanna",
      userDescription: "Tech Educator | YouTube Instructor",
      likesCount: "68.9K",
      postCount: "655",
      viewsCount: "310.6K",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {usersData.map((user, idx) => {
          return (
            <Card
              key={idx}
              bgImage={user.bgImage}
              profileImage={user.profileImage}
              userName={user.userName}
              userDescription={user.userDescription}
              likesCount={user.likesCount}
              postCount={user.postCount}
              viewsCount={user.viewsCount}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
