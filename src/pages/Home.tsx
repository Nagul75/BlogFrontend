import ImageBanner from "@/components/ImageBanner";
import Post from "@/components/Post";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  const content = `A simple, console-based to-do-list application written in c++. This project demonstrates core c++ principles and file I/O for data persistence.
## Features
- **Add, remove and view tasks:** Perform all basic to-do-list operations.
- **Mark task as complete:** Keep track of your progress.
- **Persistent storage:** Tasks are saved to tasks.txt and reloaded when application is restarted.
- **Multi-line descriptions:** Add detailed, multi-line descriptions to your tasks.

## Getting started
### Prerequisites
To build and run this project, you will need
- A C++20 compiler
- CMake (3.16 or later)

### Building the project
1. Clone the repositary and navigate to to repo directory
   
   git clone https://github.com/Nagul75/todoListManager.git
   cd todoListManager/
   
2. Configure and build with CMake:
   
   cmake .
   make
   
3. Run the application

   ./todoListManager`;

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex justify-center items-center">
        <ImageBanner />
      </div>
      <div className="flex flex-col items-end mb-10 relative w-full">
        <SearchInput />
        <Post
          date_published="25/05/2005"
          title="Intersectionality of caste and class in India"
          id="something 213"
          content={content}
        />
        <Post
          date_published="25/05/2005"
          title="Intersectionality of caste and class in India"
          id="something 213"
          content={content}
        />
        <Post
          date_published="25/05/2005"
          title="Intersectionality of caste and class in India"
          id="something 213"
          content={content}
        />
      </div>
    </div>
  );
};

export default Home;
