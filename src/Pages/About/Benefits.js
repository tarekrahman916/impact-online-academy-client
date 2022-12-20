import React from "react";

const Benefits = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="divide-y divide-gray-700">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5 text-3xl">
                Mission Statement
              </h3>
              <p className="md:pl-0 md:col-span-7 font-semibold">
                At Impact Academy, we provide a SAFE educational environment, so
                students can focus on obtaining skills. Our students love the
                flexibility provided by a cutting-edge digital curriculum, and
                the one-on-one attention they receive from their
                teachers/mentors. <br />
                <br />
                Part of our unique mission at Impact Academy is to personalize
                the learning process to meet the ability, pace, and interest of
                each student. In order to achieve this goal, we provide: <br />
                <br />
                Diagnostic math and reading digital assessments for all newly
                registered students to assist teachers in placing their students
                in the appropriate courses <br />
                <br />
                Live online class sessions where students are taught difficult
                to understand concepts <br /> <br />
                Virtual tutoring sessions
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5 text-3xl">Beliefs</h3>
              <div className="md:pl-0 md:col-span-7">
                <p className="text-xl mb-4">
                  We believe students will become productive citizens when they
                  are challenged and mentored in leadership, problem-solving,
                  and critical thinking skills. Our student-centered education
                  includes the following:
                </p>
                <ul className="list-disc  text-gray-700">
                  <li className="mb-3">
                    Students experience a rigorous blended online learning
                    environment that prepares them for advanced education
                    options, future employment, and skillfully.
                  </li>
                  <li className="mb-3">
                    Students have meaningful communications through face-to-face
                    interactions, and virtually throughout their learning
                    experience.
                  </li>
                  <li className="mb-3">
                    Students complete meaningful projects and solve challenging
                    problems while learning in the community by learning and
                    applying academic skills consistent with real world
                    expectations, standards, and knowledge.
                  </li>
                  <li className="mb-3">
                    Students are aware of what they are expected to learn, know
                    what they have learned, and can identify what they still
                    need to learn.
                  </li>
                  <li className="mb-3">
                    Students are aware of their individual interests and
                    talents, and they know how to seek out opportunities to work
                    on relevant projects and curriculum that interest them.
                  </li>
                  <li className="mb-3">
                    The staff seeks to continually improve and expand their
                    knowledge of teaching practices, curriculum, and innovative
                    technology.
                  </li>
                  <li className="mb-3">
                    The academy community embraces the diversity of the academy
                    population by fostering an academy culture of safety,
                    acceptance, and respect.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
