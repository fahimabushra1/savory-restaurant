

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className='w-3/12 mx-auto text-center my-12'>
            <p className='text-yellow-600 mb-2'>---{subTitle}---</p>
            <h3 className='text-4xl text-cyan-300 uppercase border-y-4 py-4'>{title}</h3>
        </div>
    );
};

export default SectionTitle;