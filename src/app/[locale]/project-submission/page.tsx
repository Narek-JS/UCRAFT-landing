/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FileUploadField } from "@/components/form/FileUploadField";
import { RadioGroupField } from "@/components/form/RadioGroupField";
import { TextInputField } from "@/components/form/TextInputField";
import { TextAreaField } from "@/components/form/TextAreaField";
import { SelectField } from "@/components/form/SelectField";

const schema = yup.object().shape({
  groupType: yup.string().required("Պարտադիր դաշտ"),
  orgName: yup.string().required("Պարտադիր դաշտ"),
  funded: yup.string().required("Պարտադիր դաշտ"),
  grantDetails: yup.string(),
  projectDesc: yup.string().required("Պարտադիր դաշտ"),
  youngResearchers: yup.string().required("Պարտադիր դաշտ"),
  readiness: yup.string().required("Պարտադիր դաշտ"),
  techNeeds: yup.string().required("Պարտադիր դաշտ"),
  hpcChoice: yup.string().required("Պարտադիր դաշտ"),
  impactDesc: yup.string().required("Պարտադիր դաշտ"),
  usageFile: yup.mixed(),
  duration: yup.string().required("Պարտադիր դաշտ"),
  capabilities: yup.string().required("Պարտադիր դաշտ"),
  community: yup.string().required("Պարտադիր դաշտ"),
  communityDetails: yup.string(),
});

export default function ProjectSubmission() {
  const methods = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const onSubmit = async (data: any) => {
    const errorKeys = Object.keys(methods.formState.errors);
    if (errorKeys.length > 0) {
      const firstInvalid = document.getElementsByName(errorKeys[0])?.[0];
      firstInvalid?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    console.log("Submitted:", data);
  };

  return (
    <main className="bg-[#f5f6fa] pt-[130px] pb-20 text-[rgba(0,0,0,0.85)] text-sm font-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-start">
          {/* Left Side */}
          <div className="w-full lg:w-[40%] max-w-[580px] lg:sticky top-[130px] self-start flex flex-col gap-5 lg:mb-10">
            <p className="text-base">
              Ստացեք ֆոնդ և ձեր գաղափարը դարձրեք իրականություն
            </p>
            <h5 className="text-[32px] leading-[42px] font-normal font-[Sora, var(--base-text-font-family)]">
              Եթե դուք արհեստական բանականության ոլորտի ստարտափ եք և ունեք
              գաղափար, <br /> եկե՛ք համախմբվենք
            </h5>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[60%] max-w-[580px] bg-white rounded-xl">
            <div className="px-5 py-6">
              <h2 className="text-lg font-semibold mb-2">Լրացրեք հայտը</h2>
              <p className="mb-6">
                Պատմեք մեզ ձեր ստարտափի մասին, և մենք կկապվենք ձեզ հետ
              </p>
              <FormProvider {...methods}>
                <form
                  className="space-y-6"
                  onSubmit={methods.handleSubmit(onSubmit)}
                  noValidate
                >
                  <RadioGroupField
                    name="groupType"
                    label="Ընտրեք այն պատասխանը, որը լավագույնս նկարագրում է ձեր խումբը"
                    options={[
                      { label: "Համալսարան", value: "university" },
                      {
                        label: "Գիտահետազոտական ինստիտուտ",
                        value: "institute",
                      },
                      { label: "Հետազոտական խումբ", value: "team" },
                      { label: "Ստարտափ", value: "startup" },
                      {
                        label: "Արդյունաբերական ընկերություն",
                        value: "company",
                      },
                      { label: "Այլ (խնդրում ենք նշել)", value: "other" },
                    ]}
                  />

                  <TextInputField
                    name="orgName"
                    label="Ընկերության/խմբի/համալսարանի/ինստիտուտի անվանումը"
                    placeholder="Ձեր պատասխանը"
                  />

                  <RadioGroupField
                    name="funded"
                    label="Ձեր նախագիծը ֆինանսավորվում է պետական դրամաշնորհներից..."
                    options={[
                      { label: "Այո", value: "yes" },
                      { label: "Ոչ", value: "no" },
                    ]}
                  />

                  <TextAreaField
                    name="grantDetails"
                    label="Եթե այո, ապա խնդրում ենք նշել հետազոտության թեման և դրամաշնորհի նույնականացման համարը"
                    placeholder="Ձեր պատասխանը"
                  />

                  <TextAreaField
                    name="projectDesc"
                    label="Նկարագրեք ձեր նախագիծը (առավելագույնը 500 բառ)"
                    placeholder="Ձեր պատասխանը"
                  />

                  <SelectField
                    name="youngResearchers"
                    label="Քանի երիտասարդ հետազոտող է ներգրավված ձեր նախագծում"
                    options={[
                      { label: "1-2", value: "1-2" },
                      { label: "3-5", value: "3-5" },
                      { label: "6+", value: "6+" },
                    ]}
                  />

                  <SelectField
                    name="readiness"
                    label="Խնդրում ենք գնահատել ձեր նախագիծն ըստ տեխնոլոգիական պատրաստվածության մակարդակի"
                    options={[
                      { label: "Low", value: "low" },
                      { label: "Medium", value: "medium" },
                      { label: "High", value: "high" },
                    ]}
                  />

                  <TextAreaField
                    name="techNeeds"
                    label="Սահմանեք ձեր հետազոտական նախագծի հատուկ պահանջները..."
                    placeholder="Ձեր պատասխանը"
                  />

                  <SelectField
                    name="hpcChoice"
                    label="Խնդրում ենք ընտրել, թե ինչ HPC ռեսուրս է անհրաժեշտ..."
                    options={[
                      { label: "GPU", value: "gpu" },
                      { label: "CPU", value: "cpu" },
                      { label: "Both", value: "both" },
                    ]}
                  />

                  <TextAreaField
                    name="impactDesc"
                    label="Նկարագրեք ազդեցությունը. Արհեստական բանականության նախագծի հնարավոր ազդեցությունը..."
                    placeholder="Ձեր պատասխանը"
                  />

                  <FileUploadField
                    name="usageFile"
                    label="Տրամադրեք HPC ռեսուրսի տեխնիկական նկարագիր (pdf, doc, docx, txt)"
                  />

                  <RadioGroupField
                    name="duration"
                    label="Որքան ժամանակ եք նախատեսում օգտագործել անհրաժեշտ HPC ռեսուրսը"
                    options={[
                      { label: "up to 2 weeks", value: "2w" },
                      { label: "up to 4 weeks", value: "4w" },
                      { label: "up to 8 weeks", value: "8w" },
                      { label: "up to 12 weeks", value: "12w" },
                      { label: "up to 24 weeks", value: "24w" },
                      { label: "up to 36 weeks", value: "36w" },
                      { label: "up to 48 weeks", value: "48w" },
                      { label: "other", value: "other" },
                    ]}
                  />

                  <TextAreaField
                    name="capabilities"
                    label="Կարողությունների զարգացում..."
                    placeholder="Ձեր պատասխանը"
                  />

                  <RadioGroupField
                    name="community"
                    label="Աջակցել համայնքին..."
                    options={[
                      { label: "Այո", value: "yes" },
                      { label: "Ոչ", value: "no" },
                    ]}
                  />

                  <TextAreaField
                    name="communityDetails"
                    label="Եթե պատասխանել եք Այո, խնդրում ենք մանրամասնել"
                    placeholder="Ձեր պատասխանը"
                  />

                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium cursor-pointer w-full lg:w-auto"
                  >
                    Ուղարկել հայտը
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
