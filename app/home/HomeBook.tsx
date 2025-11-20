"use client";
import Form from "../components/Form";

export default function HomeBook() {
  return (
    <section className="section-book">
      <div className="flex-container--center">
        <div className="book">
          <div id="signup-form">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
