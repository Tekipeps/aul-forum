import { FC, ReactElement, useState } from 'react';
import { StyledBackground, StyledModal, StyledCloseBtnWrapper } from './CreatePostModal.styled';
import CloseBtn from '../../components/reusable/CloseBtn';

interface CreatePostModalParams {
    closeModal: () => void;
}

const CreatePostModal: FC<CreatePostModalParams> = ({ closeModal }): ReactElement => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const createPost = () => {
        alert(`Waiting for tekena to do this...\ntitle:${title}\ncontent:${content}`);
    };

    return (
        <StyledBackground
            onClick={(event) => {
                if (event.target === event.currentTarget) closeModal();
            }}
        >
            <StyledModal>
                <StyledCloseBtnWrapper>
                    <CloseBtn size={40} onClick={closeModal} />
                </StyledCloseBtnWrapper>
                <textarea
                    onChange={({ target }) => setTitle(target.value)}
                    value={title}
                    maxLength={100}
                    className='title'
                    rows={2}
                    placeholder={'Topic'}
                ></textarea>
                <textarea
                    onChange={({ target }) => setContent(target.value)}
                    value={content}
                    maxLength={400}
                    className='content'
                    rows={5}
                    placeholder={"What's on your mind?"}
                ></textarea>
                <div onClick={createPost} className='createpost-btn'>
                    Post
                </div>
            </StyledModal>
        </StyledBackground>
    );
};

export default CreatePostModal;
