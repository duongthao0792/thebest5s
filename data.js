function getData(){
	var dataAMZ = {
	B00CH9QWOU: {US: "https://amzn.to/35Wka7J",CA: "",UK: ""},
	B01G6Q45AM: {US: "https://amzn.to/2FUCbsf",CA: "",UK: ""},
	B07JH7GS76: {US: "https://amzn.to/362oVgd",CA: "",UK: ""},
	B07MRG5F4J: {US: "https://amzn.to/33UI2WS",CA: "",UK: ""},
	B07KXPXN5T: {US: "https://amzn.to/2RJTXRs",CA: "",UK: ""},
	B01F6XZ6BS: {US: "https://amzn.to/3mKagMe",CA: "",UK: ""},
	B07FZ8S74R: {US: "https://amzn.to/3iSNQ9u",CA: "",UK: ""},
	B07VR22832: {US: "https://amzn.to/3kGPGuH",CA: "",UK: ""},
	B00UWP07LK: {US: "https://amzn.to/2ZXlweq",CA: "",UK: ""},
	B08232VZBR: {US: "https://amzn.to/3ciZQP0",CA: "",UK: ""},
	B01ALBMIEI: {US: "https://amzn.to/32P9MfV",CA: "",UK: ""},
	B083Q2L4VZ: {US: "https://amzn.to/3iRDDdx",CA: "",UK: ""},
	B078YZ586K: {US: "https://amzn.to/2EkHnF8",CA: "",UK: ""},
	B07RCNHTLS: {US: "https://amzn.to/2ZYYKDc",CA: "",UK: ""},
	B07VM1HQ87: {US: "https://amzn.to/3mIS4mg",CA: "",UK: ""},
	B000058TJ3: {US: "https://amzn.to/35ZLYrM",CA: "",UK: ""},
	B07VVK39F7: {US: "https://amzn.to/33UIgNI",CA: "",UK: ""},
	B01D3FOD0Q: {US: "https://amzn.to/2HiLZg9",CA: "",UK: ""},
	B07MY2H45K: {US: "https://amzn.to/2EngyQT",CA: "",UK: ""},
	B00474X5DO: {US: "https://amzn.to/3kuY5Bg",CA: "",UK: ""},
	B07FDFP79J: {US: "https://amzn.to/3kDLc7S",CA: "",UK: ""},
	B07HB7QBQ2: {US: "https://amzn.to/2ZXO8Vg",CA: "",UK: ""},
	B08375XS5G: {US: "https://amzn.to/2EpY1Du",CA: "",UK: ""},
	B086Q2M7FK: {US: "https://amzn.to/35UUW9E",CA: "",UK: ""},
	B07GBY2WJJ: {US: "https://amzn.to/2RPsBJE",CA: "",UK: ""},
	B07SFJXLYW: {US: "https://amzn.to/3kH8ppF",CA: "",UK: ""},
	B07Q19RL7D: {US: "https://amzn.to/3mAEHEG",CA: "",UK: ""},
	B00QBZ2BX2: {US: "https://amzn.to/3ci6mFR",CA: "",UK: ""},
	B012H0KA5A: {US: "https://amzn.to/32Pa5HB",CA: "",UK: ""},
	B00EYN1NEG: {US: "https://amzn.to/2FPYNtZ",CA: "",UK: ""},
	B00CEMH3C0: {US: "https://amzn.to/33P19kT",CA: "",UK: ""},
	B07PDXKSGJ: {US: "https://amzn.to/3kxyOpS",CA: "",UK: ""},
	B07NRBDMJR: {US: "https://amzn.to/33Hy2Qk",CA: "",UK: ""},
	B085797ZFF: {US: "https://amzn.to/32R72Pd",CA: "",UK: ""},
	B0867GMW9X: {US: "https://amzn.to/3hSb5Px",CA: "",UK: ""},
	B07S76WBGF: {US: "https://amzn.to/3iRd0W5",CA: "",UK: ""},
	B07CHYKRK7: {US: "https://amzn.to/2ZWVJ6i",CA: "",UK: ""},
	B01N9P4NH5: {US: "https://amzn.to/2HgBNER",CA: "",UK: ""},
	B001EJNMK6: {US: "https://amzn.to/343OgDV",CA: "",UK: ""},
	B01MSSHBRU: {US: "https://amzn.to/3ckmztX",CA: "",UK: ""},
	B07LCSK4JY: {US: "https://amzn.to/2HnaV6n",CA: "",UK: ""},
	B07NX8XBMP: {US: "https://amzn.to/2ZVex64",CA: "",UK: ""},
	B0798LCJK9: {US: "https://amzn.to/363HLDk",CA: "",UK: ""},
	B07H5RVVM6: {US: "https://amzn.to/2ZZOyds",CA: "",UK: ""},
	B07RNMDHRL: {US: "https://amzn.to/2FPcycv",CA: "",UK: ""},
	B073BLHCND: {US: "https://amzn.to/3cmZVRC",CA: "",UK: ""},
	B07DY4QJX3: {US: "https://amzn.to/2FZyiC4",CA: "",UK: ""},
	B07F618LKC: {US: "https://amzn.to/33MizP3",CA: "",UK: ""},
	B00EAY540S: {US: "https://amzn.to/3ckxhAD",CA: "",UK: ""},
	B07XTFYVB2: {US: "https://amzn.to/3kDJW4C",CA: "",UK: ""},
	B075TDRS2M: {US: "https://amzn.to/3iWSvHq",CA: "",UK: ""},
	B072JWN6LC: {US: "https://amzn.to/3ciEod7",CA: "",UK: ""},
	B07BDHJJTH: {US: "https://amzn.to/3kD7OWi",CA: "",UK: ""},
	B07C3JZJHG: {US: "https://amzn.to/2ZXY9By",CA: "",UK: ""},
	B06VSJ9D1H: {US: "https://amzn.to/2Hcd4BB",CA: "",UK: ""},
	B01FGRW0ZE: {US: "https://amzn.to/32RwNPG",CA: "",UK: ""},
	B07VT57Q4W: {US: "https://amzn.to/369CZEL",CA: "",UK: ""},
	B072TCS38X: {US: "https://amzn.to/33SktxC",CA: "",UK: ""},
	B07Q6CPQK4: {US: "https://amzn.to/2FVFYW3",CA: "",UK: ""},
	B00PC29ETE: {US: "https://amzn.to/3kH9oGn",CA: "",UK: ""},
	B07F2RTN5Z: {US: "https://amzn.to/30eORl5",CA: "",UK: ""},
	B07S922JS4: {US: "https://amzn.to/3iVu7WO",CA: "",UK: ""},
	B07S5XVD16: {US: "https://amzn.to/3kE7h6w",CA: "",UK: ""},
	B085QF1MX1: {US: "https://amzn.to/3kwnIl4",CA: "",UK: ""},
	B086S5KJB1: {US: "https://amzn.to/3kH9ygX",CA: "",UK: ""},
	B086WCV7TF: {US: "https://amzn.to/3kANRPO",CA: "",UK: ""},
	B086V4RF5M: {US: "https://amzn.to/35SQVmh",CA: "",UK: ""},
	B07YGZL8XF: {US: "https://amzn.to/3iRMagh",CA: "",UK: ""},
	B07V7S6CBQ: {US: "https://amzn.to/33RlTbA",CA: "",UK: ""},
	B087ZM7YPH: {US: "https://amzn.to/35Yg5A2",CA: "",UK: ""},
	B07W51X728: {US: "https://amzn.to/3hQStiU",CA: "",UK: ""},
	B073NZQTQN: {US: "https://amzn.to/2FSbd4l",CA: "",UK: ""},
	B07TXB6857: {US: "https://amzn.to/2RNYaUs",CA: "",UK: ""},
	B08B5MFVFH: {US: "https://amzn.to/2Emj4Xs",CA: "",UK: ""},
	B083CP8NWJ: {US: "https://amzn.to/2FSeb9f",CA: "",UK: ""},
	B07Q6CPQK4: {US: "https://amzn.to/3hTbd1o",CA: "",UK: ""},
	B07HMR736H: {US: "https://amzn.to/2RPuciC",CA: "",UK: ""},
	B07KKFDM1M: {US: "https://amzn.to/2HnbX2f",CA: "",UK: ""},
	B079QYYGF1: {US: "https://amzn.to/35Yh8jw",CA: "",UK: ""},
	B077HW9XM7: {US: "https://amzn.to/3hRT5oz",CA: "",UK: ""},
	B078MPFN55: {US: "https://amzn.to/3iSKC5T",CA: "",UK: ""},
	B07QXM2V6X: {US: "https://amzn.to/33NqMCK",CA: "",UK: ""},
	B07RLRWWPJ: {US: "https://amzn.to/3mPgElN",CA: "",UK: ""},
	B01ID8H6NO: {US: "https://amzn.to/32OId6E",CA: "",UK: ""},
	B01M716CC2: {US: "https://amzn.to/3iT5Mkm",CA: "",UK: ""},
	B01MPX171W: {US: "https://amzn.to/35XYcRW",CA: "",UK: ""},
	B005C3R4AO: {US: "https://amzn.to/35XodAw",CA: "",UK: ""},
	B00SMLJPKA: {US: "https://amzn.to/3cl8BIk",CA: "",UK: ""},
	B0784ZKVKF: {US: "https://amzn.to/32OoROV",CA: "",UK: ""},
	B00GM32RIC: {US: "https://amzn.to/35Vlmbx",CA: "",UK: ""},
	B00I0ZGOZM: {US: "https://amzn.to/35YgsKW",CA: "",UK: ""},
	B016OIF2JU: {US: "https://amzn.to/3hTVFKJ",CA: "",UK: ""},
	B005NASZG8: {US: "https://amzn.to/33J9CGk",CA: "",UK: ""},
	B072JML2GZ: {US: "https://amzn.to/2HndaXh",CA: "",UK: ""},
	B0116W5B5O: {US: "https://amzn.to/3cjICkB",CA: "",UK: ""},
	B01DVQF6EY: {US: "https://amzn.to/2FVGEuz",CA: "",UK: ""},
	B076QJNK8G: {US: "https://amzn.to/2RJExNc",CA: "",UK: ""},
	B073VBWKJZ: {US: "https://amzn.to/2FSbQuJ",CA: "",UK: ""},
	B07RXPJMXL: {US: "https://amzn.to/2RMxXp7",CA: "",UK: ""},
	B07GNPDMRP: {US: "https://amzn.to/32RlW8k",CA: "",UK: ""},
	B07MCDL9N3: {US: "https://amzn.to/3co7kAu",CA: "",UK: ""},
	B07MKLJLY4: {US: "https://amzn.to/2HncjG7",CA: "",UK: ""},
	B00JJZ1A9M: {US: "https://amzn.to/3iQBwXm",CA: "",UK: ""},
	B01N0KXNFX: {US: "https://amzn.to/3kzKPv6",CA: "",UK: ""},
	B00KA8YC6A: {US: "https://amzn.to/3mL4GcS",CA: "",UK: ""},
	B000N2YKQ0: {US: "https://amzn.to/3kDhVdD",CA: "",UK: ""},
	B0713TGHVM: {US: "https://amzn.to/35SRr3H",CA: "",UK: ""},
	B01MTG1U4G: {US: "https://amzn.to/2FUEOdB",CA: "",UK: ""},
	B00GMMYLXC: {US: "https://amzn.to/35YgHpk",CA: "",UK: ""},
	B07NHQ4CXM: {US: "https://amzn.to/3hPx5L6",CA: "",UK: ""},
	B07144LZ9V: {US: "https://amzn.to/33J9MNW",CA: "",UK: ""},
	B07GZN3QNZ: {US: "https://amzn.to/3mAGs4K",CA: "",UK: ""},
	B002MPLYEW: {US: "https://amzn.to/3ckoA9v",CA: "",UK: ""},
	B000RP6DCC: {US: "https://amzn.to/3kDL6x0",CA: "",UK: ""},
	B01LA3VHHU: {US: "https://amzn.to/3hVOQbw",CA: "",UK: ""},
	B01M3R711N: {US: "https://amzn.to/3hYKHUs",CA: "",UK: ""},
	B07BWN72TW: {US: "https://amzn.to/3coHR9R",CA: "",UK: ""},
	B07BN3MB6Z: {US: "https://amzn.to/3iSVSPx",CA: "",UK: ""},
	B07NBNCNLM: {US: "https://amzn.to/3iVnDqL",CA: "",UK: ""},
	B07NC8ZDVL: {US: "https://amzn.to/2ZVDoXc",CA: "",UK: ""},
	B00CMREO0Q: {US: "https://amzn.to/362re2R",CA: "",UK: ""},
	B00198CW7G: {US: "https://amzn.to/3ciFXrv",CA: "",UK: ""},
	B07V48X7HG: {US: "https://amzn.to/3mD8XPv",CA: "",UK: ""},
	B01LWA8J37: {US: "https://amzn.to/3kzL1KQ",CA: "",UK: ""},
	B00G0PF4FU: {US: "https://amzn.to/3kCKNT9",CA: "",UK: ""},
	B01AA8WOAK: {US: "https://amzn.to/3chQZx8",CA: "",UK: ""},
	B07P1XFYJP: {US: "https://amzn.to/32QIlCz",CA: "",UK: ""},
	B072BZBPXP: {US: "https://amzn.to/2ZYzzk7",CA: "",UK: ""},
	B07KKC6JP8: {US: "https://amzn.to/3cm8P1Y",CA: "",UK: ""},
	B06X415RY6: {US: "https://amzn.to/3hSe62j",CA: "",UK: ""},
	B0009RF7DY: {US: "https://amzn.to/2FIFJOy",CA: "",UK: ""},
	B075CQ86ZV: {US: "https://amzn.to/2HfeHhW",CA: "",UK: ""},
	B00H2VOSP8: {US: "https://amzn.to/32QXjZt",CA: "",UK: ""},
	B083GQPRLK: {US: "https://amzn.to/2HndhCf",CA: "",UK: ""},
	B083L8RNJR: {US: "https://amzn.to/2EmXHFz",CA: "",UK: ""},
	B07RZY2ZLK: {US: "https://amzn.to/3iVhPxm",CA: "",UK: ""},
	B07QDVLXNN: {US: "https://amzn.to/362rRJL",CA: "",UK: ""},
	B07DF9GVK9: {US: "https://amzn.to/2S0uovP",CA: "",UK: ""},
	B07PX2HQQ4: {US: "https://amzn.to/3chzrRK",CA: "",UK: ""},
	B07Y9LMJDD: {US: "https://amzn.to/32Pd42L",CA: "",UK: ""},
	B07V56QH7T: {US: "https://amzn.to/33QEiFA",CA: "",UK: ""},
	B07RQC1GHZ: {US: "https://amzn.to/2RPkSeQ",CA: "",UK: ""},
	B07X7ZMVM5: {US: "https://amzn.to/362rP4B",CA: "",UK: ""},
	B07WNVRYVK: {US: "https://amzn.to/3mI0iLy",CA: "",UK: ""},
	B07NPNXP1Z: {US: "https://amzn.to/3mJugPp",CA: "",UK: ""},
	B07PYMFMVK: {US: "https://amzn.to/35XZU5t",CA: "",UK: ""},
	B07PNKSMZM: {US: "https://amzn.to/2RKFmp1",CA: "",UK: ""},
	B07VWQJW9D: {US: "https://amzn.to/3hRpGuO",CA: "",UK: ""},
	B00JJ5I7GQ: {US: "https://amzn.to/32RMB4F",CA: "",UK: ""},
	B01D8DAYII: {US: "https://amzn.to/2FQ1dZB",CA: "",UK: ""},
	B00HQONFY6: {US: "https://amzn.to/3kAPhtC",CA: "",UK: ""},
	B009SCPYN4: {US: "https://amzn.to/3iNg7OC",CA: "",UK: ""},
	B06XFVQFP9: {US: "https://amzn.to/3clm2bf",CA: "",UK: ""},
	B0744CTXW8: {US: "https://amzn.to/2FSfPYt",CA: "",UK: ""},
	B0787BVSTH: {US: "https://amzn.to/32T48K2",CA: "",UK: ""},
	B00BRUNPXQ: {US: "https://amzn.to/2Hlx7hc",CA: "",UK: ""},
	B00NB3P98G: {US: "https://amzn.to/32Td8ih",CA: "",UK: ""},
	B00450U6CS: {US: "https://amzn.to/3cn2yms",CA: "",UK: ""},
	B078MGY2CS: {US: "https://amzn.to/360wZOj",CA: "",UK: ""},
	B001AMRCDU: {US: "https://amzn.to/2ZX93aU",CA: "",UK: ""},
	B077N51CR2: {US: "https://amzn.to/3iT7rq6",CA: "",UK: ""},
	B005GSPVHS: {US: "https://amzn.to/2ElhRj5",CA: "",UK: ""},
	B079D3PN6W: {US: "https://amzn.to/32Opbxd",CA: "",UK: ""},
	B01DVW6G42: {US: "https://amzn.to/3mGxYt0",CA: "",UK: ""},
	B008IXRY6Y: {US: "https://amzn.to/3mI0xGs",CA: "",UK: ""},
	B00MMV0R76: {US: "https://amzn.to/2S0uMdL",CA: "",UK: ""},
	B01M3U32IA: {US: "https://amzn.to/2FFViqd",CA: "",UK: ""},
	B01IU6RJYA: {US: "https://amzn.to/35XZxIs",CA: "",UK: ""},
	B009IJ2LM4: {US: "https://amzn.to/3kPE3lh",CA: "",UK: ""},
	B0798C79C4: {US: "https://amzn.to/2RPll0C",CA: "",UK: ""},
	B00EYVSOKY: {US: "https://amzn.to/3cn2x1S",CA: "",UK: ""},
	B0183D7LJ8: {US: "https://amzn.to/2RLX4IP",CA: "",UK: ""},
	B01M14RI79: {US: "https://amzn.to/3co8YlE",CA: "",UK: ""},
	B006O0APQO: {US: "https://amzn.to/32Oqufv",CA: "",UK: ""},
	B0792BWMV4: {US: "https://amzn.to/33Jt6dU",CA: "",UK: ""},
	B07GPH2K9P: {US: "https://amzn.to/3kD9Q8S",CA: "",UK: ""},
	B079FKTHQJ: {US: "https://amzn.to/3cllOB9",CA: "",UK: ""},
	B001GCU1BO: {US: "https://amzn.to/3kv1kZs",CA: "",UK: ""},
	B07STH7C9F: {US: "https://amzn.to/343QXW3",CA: "",UK: ""},
	B004S494WO: {US: "https://amzn.to/2FUHN5M",CA: "",UK: ""},
	B01N0BWLUB: {US: "https://amzn.to/3hYMgli",CA: "",UK: ""},
	B01D93Z9ZA: {US: "https://amzn.to/300cuNX",CA: "",UK: ""},
	B07D9W25V4: {US: "https://amzn.to/35UYhpc",CA: "",UK: ""},
	B07D8HN9V6: {US: "https://amzn.to/3hZZP3X",CA: "",UK: ""},
	B07D9X69X6: {US: "https://amzn.to/32SvPm5",CA: "",UK: ""},
	B077XNYLLB: {US: "https://amzn.to/2RJGgSG",CA: "",UK: ""},
	B07RHQ5YNZ: {US: "https://amzn.to/2RTITkF",CA: "",UK: ""},
	B01MPWCS7O: {US: "https://amzn.to/3hPyXU8",CA: "",UK: ""},
	B076QLXHDH: {US: "https://amzn.to/3ciZJTu",CA: "",UK: ""},
	B00W2KG92Y: {US: "https://amzn.to/3clayEE",CA: "",UK: ""},
	B074PYH768: {US: "https://amzn.to/3iROUKL",CA: "",UK: ""},
	B01MS22KO3: {US: "https://amzn.to/3mFz8ow",CA: "",UK: ""},
	B07RSM91SY: {US: "https://amzn.to/2HmWfnK",CA: "",UK: ""},
	B07B9NP4GF: {US: "https://amzn.to/2FFHOuD",CA: "",UK: ""},
	B01MSZ036Q: {US: "https://amzn.to/2RNmo0W",CA: "",UK: ""},
	B07FKJHNZX: {US: "https://amzn.to/2FHmDbD",CA: "",UK: ""},
	B01IRMBG7I: {US: "https://amzn.to/32QYx71",CA: "",UK: ""},
	B07PTNV3CF: {US: "https://amzn.to/3mRu0hk",CA: "",UK: ""},
	B00CMBTCHW: {US: "https://amzn.to/3cmagxo",CA: "",UK: ""},
	B074M3B8Q4: {US: "https://amzn.to/3ciOWJb",CA: "",UK: ""},
	B07F3FTJCM: {US: "https://amzn.to/2FXtxJk",CA: "",UK: ""},
	B01M0N8256: {US: "https://amzn.to/35VBppD",CA: "",UK: ""},
	B00FOUDF62: {US: "https://amzn.to/32TeWrz",CA: "",UK: ""},
	B00EPNDJ24: {US: "https://amzn.to/2EmWNc1",CA: "",UK: ""},
	B009IJ2N9U: {US: "https://amzn.to/3kFJkvE",CA: "",UK: ""},
	B0128T2HQK: {US: "https://amzn.to/3hSbRw2",CA: "",UK: ""},
	B00TVFO0B0: {US: "https://amzn.to/2ZXT2Sa",CA: "",UK: ""},
	B06XBF75QJ: {US: "https://amzn.to/3mDIVeO",CA: "",UK: ""},
	B084DBC9MN: {US: "https://amzn.to/3iToMiq",CA: "",UK: ""},
	B07NC2QM6V: {US: "https://amzn.to/2ZYCIAj",CA: "",UK: ""},
	B07N3Z9M7H: {US: "https://amzn.to/3ckBUdZ",CA: "",UK: ""},
	B08BPJ76GP: {US: "https://amzn.to/3kFS84i",CA: "",UK: ""},
	B000ANEPYO: {US: "https://amzn.to/3hTZgbH",CA: "",UK: ""},
	B06XPGHMGF: {US: "https://amzn.to/3mGuNBx",CA: "",UK: ""},
	B072VLKC4P: {US: "https://amzn.to/2FShWeR",CA: "",UK: ""},
	B087Q3PTJP: {US: "https://amzn.to/2FShTQd",CA: "",UK: ""},
	B07SGFY8YB: {US: "https://amzn.to/3kIMi2t",CA: "",UK: ""},
	B0711CGWXX: {US: "https://amzn.to/2RLyfwi",CA: "",UK: ""},
	B07H7R6YTB: {US: "https://amzn.to/3iSV5yd",CA: "",UK: ""},
	B07J6S4RZ9: {US: "https://amzn.to/3hYUKJa",CA: "",UK: ""},
	B07S39CW8Q: {US: "https://amzn.to/3cikjDJ",CA: "",UK: ""},
	B07W94FNDP: {US: "https://amzn.to/3hSjRgH",CA: "",UK: ""},
	B0799Q45TT: {US: "https://amzn.to/35Y6JEs",CA: "",UK: ""},
	B074QWH7HY: {US: "https://amzn.to/2RMHNr3",CA: "",UK: ""},
	B00JJZBHK4: {US: "https://amzn.to/3i083Jn",CA: "",UK: ""},
	B07NY9Z3YX: {US: "https://amzn.to/3iTfYcC",CA: "",UK: ""},
	B07NHVFWCQ: {US: "https://amzn.to/2Eq9va4",CA: "",UK: ""},
	B07D528W98: {US: "https://amzn.to/3kxJ7KA",CA: "",UK: ""},
	B078F12DPL: {US: "https://amzn.to/2RMV82D",CA: "",UK: ""},
	B084P72GYX: {US: "https://amzn.to/35Yd02O",CA: "",UK: ""},
	B00JGRBSS6: {US: "https://amzn.to/3hWDiEN",CA: "",UK: ""},
	B000GRDS6U: {US: "https://amzn.to/2FVQnB5",CA: "",UK: ""},
	B002R8CPRY: {US: "https://amzn.to/2FXB4YC",CA: "",UK: ""},
	B07FP186CN: {US: "https://amzn.to/3kzD0pl",CA: "",UK: ""},
	B07F3DP48S: {US: "https://amzn.to/32OxKbl",CA: "",UK: ""},
	B01M24RKQY: {US: "https://amzn.to/33NhE10",CA: "",UK: ""},
	B0792PD6TY: {US: "https://amzn.to/33StUx2",CA: "",UK: ""},
	B07Q9MDWQH: {US: "https://amzn.to/3cikuyT",CA: "",UK: ""},
	B00H3RI32U: {US: "https://amzn.to/32RIu92",CA: "",UK: ""},
	B07GXZ49DY: {US: "https://amzn.to/2FSmq4V",CA: "",UK: ""},
	B01E0NP5HU: {US: "https://amzn.to/2EqBvue",CA: "",UK: ""},
	B077PBGYVD: {US: "https://amzn.to/33LT5RW",CA: "",UK: ""},
	B01IENFJ14: {US: "https://amzn.to/3hTm77k",CA: "",UK: ""},
	B07M8F5P7B: {US: "https://amzn.to/2G2Zik4",CA: "",UK: ""},
	B07SQ9YCJB: {US: "https://amzn.to/2ZVu4CA",CA: "",UK: ""},
	B012H0K93I: {US: "https://amzn.to/3iX4k0g",CA: "",UK: ""},
	B079W93GGX: {US: "https://amzn.to/3iRWtRv",CA: "",UK: ""},
	B0043E6PLC: {US: "https://amzn.to/2FZJvm8",CA: "",UK: ""},
	B000UXPFMU: {US: "https://amzn.to/2En7lrL",CA: "",UK: ""},
	B07VC44C68: {US: "https://amzn.to/3cseUdm",CA: "",UK: ""},
	B07M949RQS: {US: "https://amzn.to/3hP8Igp",CA: "",UK: ""},
	B07KKFDM1M: {US: "https://amzn.to/32RvX5q",CA: "",UK: ""},
	B01AA8WOAK: {US: "https://amzn.to/3iX4sNi",CA: "",UK: ""},
	B01DEWZUG4: {US: "https://amzn.to/3iUbEJV",CA: "",UK: ""},
	B08JHMHN6S: {US: "https://amzn.to/2HmAgNL",CA: "",UK: ""},
	B07JGRJHV1: {US: "https://amzn.to/33Ss6Ex",CA: "",UK: ""},
	B07BNVST4P: {US: "https://amzn.to/3cjUjI1",CA: "",UK: ""},
	B002WKJ5ES: {US: "https://amzn.to/2RPOZ5P",CA: "",UK: ""},
	B06W54K29J: {US: "https://amzn.to/3kFPMmm",CA: "",UK: ""},
	B08GYL2CBM: {US: "https://amzn.to/3iRRPTR",CA: "",UK: ""},
	B00R9HVPBK: {US: "https://amzn.to/2RJPTki",CA: "",UK: ""},
	B016J0EITS: {US: "https://amzn.to/2RP8JGw",CA: "",UK: ""},
	B088T949GP: {US: "https://amzn.to/2ZXwQHs",CA: "",UK: ""},
	B007HIKQCK: {US: "https://amzn.to/3i09gQV",CA: "",UK: ""},
	B00GIODM6G: {US: "https://amzn.to/3cwioeZ",CA: "",UK: ""},
	B07GPXKN8Z: {US: "https://amzn.to/35V68mG",CA: "",UK: ""},
	B07CZ1CF79: {US: "https://amzn.to/2FVRFMr",CA: "",UK: ""},
	B014VBOIOC: {US: "https://amzn.to/2RP8U4E",CA: "",UK: ""},
	B08HYXW1NL: {US: "https://amzn.to/3kBL9cF",CA: "",UK: ""},
	B00D4NPMJE: {US: "https://amzn.to/2Hnp1Vh",CA: "",UK: ""},
	MCSDRY15W: {US: "https://amzn.to/3mF53FD",CA: "",UK: ""},
	B07HKXVQYC: {US: "https://amzn.to/32ONRpl",CA: "",UK: ""},
	B07TC3659T: {US: "https://amzn.to/2RLJK6X",CA: "",UK: ""},
	B00R73DYJW: {US: "https://amzn.to/3ckpwe8",CA: "",UK: ""},
	B07B94ZR74: {US: "https://amzn.to/3iWpbAI",CA: "",UK: ""},
	B00JH98GR4: {US: "https://amzn.to/2RPOEjv",CA: "",UK: ""},
	B07FX7Z3NL: {US: "https://amzn.to/2HpKSeN",CA: "",UK: ""},
	B00GJ1N5VA: {US: "https://amzn.to/3kGFFh4",CA: "",UK: ""},
	B00GBADAT6: {US: "https://amzn.to/32V3SKw",CA: "",UK: ""},
	B000BO8AKW: {US: "https://amzn.to/3kTovwT",CA: "",UK: ""},
	B07SG4KNT4: {US: "https://amzn.to/33RXrHe",CA: "",UK: ""},
	B07KQ6S5N1: {US: "https://amzn.to/3iZgA0l",CA: "",UK: ""},
	B089JS623C: {US: "https://amzn.to/3hVDRPj",CA: "",UK: ""},
	B071FFSN22: {US: "https://amzn.to/3kHoj3w",CA: "",UK: ""},
	B00Q7EPY04: {US: "https://amzn.to/2ExdaTy",CA: "",UK: ""},
	B06W2GYD8Y: {US: "https://amzn.to/361eObm",CA: "",UK: ""},
	B00IWJOOU8: {US: "https://amzn.to/32XY42B",CA: "",UK: ""},
	B07L1P4SPB: {US: "https://amzn.to/3cAalNS",CA: "",UK: ""},
	B01J664WSY: {US: "https://amzn.to/333CkCu",CA: "",UK: ""},
	B002G51BZU: {US: "https://amzn.to/2HvQGDr",CA: "",UK: ""},
	B071D58ZY5: {US: "https://amzn.to/30cosnH",CA: "",UK: ""},
	B002635ODW: {US: "https://amzn.to/3i6ganA",CA: "",UK: ""},
	B002QZ11J6: {US: "https://amzn.to/3i726tZ",CA: "",UK: ""},
	B00SMNLF4M: {US: "https://amzn.to/3cJuPnK",CA: "",UK: ""},
	B078964VVX: {US: "https://amzn.to/30fppeZ",CA: "",UK: ""},
	B01H73P304: {US: "https://amzn.to/30bDdag",CA: "",UK: ""},
	B00E3OXF6A: {US: "https://amzn.to/2G4Y0FQ",CA: "",UK: ""},
	B0018RSEMU: {US: "https://amzn.to/3kSINq3",CA: "",UK: ""},
	B07CN38M23: {US: "https://amzn.to/30bMTlq",CA: "",UK: ""},
	B07H7SGQ52: {US: "https://amzn.to/2G6LTb9",CA: "",UK: ""},
	B075XQRXCF: {US: "https://amzn.to/3kX0XXW",CA: "",UK: ""},
	B083G9WVNC: {US: "https://amzn.to/3jdes5c",CA: "",UK: ""},
	B00HQONFVE: {US: "https://amzn.to/2GjofIt",CA: "",UK: ""},
	B001BMDFPS: {US: "https://amzn.to/34d3k1M",CA: "",UK: ""},
	B00C03D01Q: {US: "https://amzn.to/3ie3US2",CA: "",UK: ""},
	B07XKCMKWB: {US: "https://amzn.to/3iVzbdN",CA: "",UK: ""},
	B0000AMK5F: {US: "https://amzn.to/3l1ZWxL",CA: "",UK: ""},
	B07DTKXTXV: {US: "https://amzn.to/3mPFTnZ",CA: "",UK: ""},
	B0055P70MQ: {US: "https://amzn.to/3ilkmQt",CA: "",UK: ""},
	B01N6T5QNO: {US: "https://amzn.to/3l1uDTv",CA: "",UK: ""},
	B07C44DM6D: {US: "https://amzn.to/3cOMUAw",CA: "",UK: ""},
	B008DBRFBK: {US: "https://amzn.to/36paCSN",CA: "",UK: ""},
	B00G00BT72: {US: "https://amzn.to/30r4plG",CA: "",UK: ""},
	B00MYWQL96: {US: "https://amzn.to/2EQMmxA",CA: "",UK: ""},
	B07TDP2MMQ: {US: "https://amzn.to/3cYUgSj",CA: "",UK: ""},
	B07HVSR8RF: {US: "https://amzn.to/34qUcXF",CA: "",UK: ""}
	}
	return dataAMZ;
}
