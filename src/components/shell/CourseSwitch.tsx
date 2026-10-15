"use client";
/** Choose the language to learn: English or Spanish. */
import { store } from "@/lib/store/store";
import { LANGS, activeCourse, type CourseId } from "@/lib/course/lang";
import { COURSES } from "@/data/courses";

export function CourseSwitch() {
  const current = activeCourse();
  return (
    <div className="seg course-switch" role="tablist" aria-label="Langue à apprendre">
      {(Object.keys(COURSES) as CourseId[]).map((id) => (
        <button key={id} role="tab" aria-selected={id === current} className={id === current ? "on" : ""} onClick={() => store.setSetting("course", id)}>
          {LANGS[id].flag} {COURSES[id].title}
        </button>
      ))}
    </div>
  );
}
