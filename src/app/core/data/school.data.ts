export interface GalleryItem {
  image: string;
  title: string;
  category: string;
  description?: string;
}

export interface Person {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface ClassInfo {
  name: string;
  age: string;
  focus: string;
  image: string;
  highlights: string[];
}

export const schoolInfo = {
  name: 'Shri Ram Vidya Mandir Public School',
  shortName: 'SVMPS',
  tagline: 'Growing curious minds. Building confident futures.',
  location: 'India',
  phone: '+91 00000 00000',
  email: 'hello@svmps.example'
};

export const classes: ClassInfo[] = [
  { name: 'LKG', age: '3–4 years', focus: 'Playful foundations', image: 'assets/school/students/lkg.svg', highlights: ['Phonics & language', 'Creative play', 'Motor skills'] },
  { name: 'UKG', age: '4–5 years', focus: 'Confident beginnings', image: 'assets/school/students/ukg.svg', highlights: ['Early numeracy', 'Storytelling', 'Discovery learning'] },
  { name: 'Class 1', age: '5–6 years', focus: 'Learning through wonder', image: 'assets/school/students/class-1.svg', highlights: ['Reading fluency', 'Mathematics', 'EVS exploration'] },
  { name: 'Class 2', age: '6–7 years', focus: 'Curiosity in action', image: 'assets/school/students/class-2.svg', highlights: ['Communication', 'Problem solving', 'Project work'] },
  { name: 'Class 3', age: '7–8 years', focus: 'Independent thinking', image: 'assets/school/students/class-3.svg', highlights: ['Research skills', 'Digital literacy', 'Creative expression'] },
  { name: 'Class 4', age: '8–9 years', focus: 'Ideas become projects', image: 'assets/school/students/class-4.svg', highlights: ['Collaboration', 'STEM activities', 'Leadership'] },
  { name: 'Class 5', age: '9–10 years', focus: 'Ready for the next chapter', image: 'assets/school/students/class-5.svg', highlights: ['Critical thinking', 'Public speaking', 'Future readiness'] }
];

export const toppers = [
  { name: 'Aarav Sharma', className: 'Class 5', score: '98.4%', image: 'assets/school/students/topper-1.svg' },
  { name: 'Ananya Verma', className: 'Class 4', score: '97.8%', image: 'assets/school/students/topper-2.svg' },
  { name: 'Vivaan Gupta', className: 'Class 3', score: '97.2%', image: 'assets/school/students/topper-3.svg' }
];

export const faculty: Person[] = [
  { name: 'Mrs. Meenakshi Pandey', role: 'Principal', image: 'assets/school/faculty/faculty-1.svg', bio: 'A warm, student-first educational leader focused on holistic growth.' },
  { name: 'Ms. Riya Kapoor', role: 'Primary Coordinator', image: 'assets/school/faculty/faculty-2.svg', bio: 'Creates joyful, structured classrooms where every child participates.' },
  { name: 'Mr. Amit Joshi', role: 'Activity & Sports', image: 'assets/school/faculty/faculty-3.svg', bio: 'Builds confidence through movement, teamwork and creative activities.' }
];

export const gallery: GalleryItem[] = [
  { image: 'assets/school/gallery/campus.svg', title: 'Campus moments', category: 'Campus' },
  { image: 'assets/school/gallery/learning.svg', title: 'Learning together', category: 'Learning' },
  { image: 'assets/school/gallery/art.svg', title: 'Art & creativity', category: 'Activities' },
  { image: 'assets/school/gallery/sports.svg', title: 'Play & sports', category: 'Sports' },
  { image: 'assets/school/gallery/event.svg', title: 'School celebrations', category: 'Events' },
  { image: 'assets/school/gallery/library.svg', title: 'Reading corner', category: 'Facilities' }
];

export const activities = [
  { title: 'Art & Craft', icon: '✦', text: 'Hands-on creativity, colour, texture and imagination.' },
  { title: 'Sports & Fitness', icon: '◈', text: 'Age-appropriate movement, games and teamwork.' },
  { title: 'Music & Dance', icon: '♪', text: 'Rhythm, performance and joyful self-expression.' },
  { title: 'Nature Club', icon: '❋', text: 'Small discoveries that build a love for nature.' },
  { title: 'Story Studio', icon: '✎', text: 'Stories that strengthen language and confidence.' },
  { title: 'Celebrations', icon: '✦', text: 'Festivals, assemblies and special school moments.' }
];

export const facilities = [
  { title: 'Bright Classrooms', text: 'Comfortable learning spaces designed for young learners.', image: 'assets/school/campus/classroom.svg' },
  { title: 'Library & Reading', text: 'A welcoming collection that makes reading feel like an adventure.', image: 'assets/school/campus/library.svg' },
  { title: 'Play Area', text: 'Space for movement, teamwork and everyday joy.', image: 'assets/school/campus/playground.svg' },
  { title: 'Creative Studio', text: 'A dedicated space for art, craft, music and expression.', image: 'assets/school/campus/studio.svg' }
];

export const events = [
  { date: '15 Aug', title: 'Independence Day Celebration', text: 'A morning of stories, performances and student participation.' },
  { date: '05 Sep', title: 'Teachers’ Day', text: 'Celebrating the people who make learning memorable.' },
  { date: '14 Nov', title: 'Children’s Day', text: 'A joyful day designed around our young learners.' }
];
