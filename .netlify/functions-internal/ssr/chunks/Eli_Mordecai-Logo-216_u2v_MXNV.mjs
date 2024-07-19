const BusinessInfo = {
  tile: "Eli Mordecai",
  owner: "Eli Mordecai",
  companyName: "Eli Mordecai - General Practice Attorney",
  street: "14 Wavecrest Ave, Suite 11",
  city: "Venice",
  state: "CA",
  zip: "90291",
  country: "USA",
  phone: "3108060011",
  email: "Eli@mordecai-law.com",
  website_name: "Eli Mordecai website",
  websiteURL: "www.Mordecai-Law.com",
  OpenGraphImg: {
    src: "/assets/images/open-graph-image.webp",
    alt: "Eli Mordecai - Los Angeles General Practice Attorney",
  },
  facebook: "https://www.facebook.com",
  twitter: "https://www.x.com",
  pinterest: "https://www.pinterest.com",
  instagram: "https://www.instagram.com",
  youtube: "https://www.youtube.com",
  /*URL that leads to Google Business Profile review */
  Google_review_url: "https://www.google.com",
  hours: [
    { day: "Monday", hours: "9am-8pm" },
    { day: "Tuesday", hours: "9am-8pm" },
    { day: "Wednesday", hours: "9am-8pm" },
    { day: "Thursday", hours: "9am-8pm" },
    { day: "Friday", hours: "9am-8pm" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
};

const formatPhone = (num) => {
  {
    var phoneNumber = num.replace(/[^\d]/g, "");
    if (phoneNumber.length < 4) {
      return phoneNumber;
    } else if (phoneNumber.length >= 4 && phoneNumber.length < 7) {
      var area_code = phoneNumber.slice(0, 3);
      var prefix = phoneNumber.slice(3, phoneNumber.length);
      return `(${area_code}) - ${prefix}`;
    } else if (phoneNumber.length >= 7) {
      var area_code = phoneNumber.slice(0, 3);
      var prefix = phoneNumber.slice(3, 6);
      var suffix = "";
      if (phoneNumber.length <= 10)
        suffix = phoneNumber.slice(6, phoneNumber.length);
      else suffix = phoneNumber.slice(6, 10);
      return `(${area_code})-${prefix}-${suffix}`;
    }
  }
};

const Logo216 = new Proxy({"src":"/_astro/Eli_Mordecai-Logo-216.Cd0KXXJI.webp","width":218,"height":69,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/logo/Eli_Mordecai-Logo-216.webp";
							}
							
							return target[name];
						}
					});

export { BusinessInfo as B, Logo216 as L, formatPhone as f };
