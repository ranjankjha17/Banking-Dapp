const hre=require("hardhat");

async function main(){

    const [owner]=await hre.ethers.getSigners();
    
    const BankContractFactory=await hre.ethers.getContractFactory("Bank");

    const BankContract=await BankContractFactory.deploy();

    await BankContract.deployed();

    console.log("bankContract deployed to:",BankContract.address);

    console.log("BankContract owner addresss:",owner.address);
}

    main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);

    });

   // bankContract deployed to: 0x83E348b9f99Bb8dA4e026669B75F3F8Fe2DA79b3
   // BankContract owner addresss: 0x0dc519676A9512006e97901CdF97d9A04c31c0dB
   