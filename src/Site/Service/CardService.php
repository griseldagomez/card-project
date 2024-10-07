<?php

namespace App\Site\Service;

use App\Entity\Card;
use App\Repository\CardRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

readonly class CardService
{
    public function __construct(
        private CardRepository $repository,
        private EntityManagerInterface $em,
        private readonly ValidatorInterface $validator)
    {
    }

    /**
     * @return Card[]
     */
    public function getAll(int $limit = 20): array
    {
        return $this->repository->getAll(null, null, null, ['id' => 'DESC'], 20);
    }

    public function get(int $id): ?Card
    {
        return $this->repository->findOneBy(['id' => $id]);
    }

    /**
     * @param string[] $card
     *
     * @throws \Exception
     */
    public function create(array $card): ?int
    {
        $cardEntity = new Card();
        $cardEntity
            ->setEmail($card['email'])
            ->setPhone($card['phone'])
            ->setColorScheme($card['colorScheme'])
            ->setGithubUrl($card['githubUrl'])
            ->setJob($card['job'])
            ->setLinkedinUrl($card['linkedinUrl'])
            ->setName($card['name'])
            ->setPhoto($card['photo'])
        ;

        $errors = $this->validator->validate($cardEntity);

        if (count($errors) > 0) {
            /*
             * Uses a __toString method on the $errors variable which is a
             * ConstraintViolationList object. This gives us a nice string
             * for debugging.
             */
            $errorsString = (string) $errors;

            throw new \Exception($errorsString);
        }

        $this->em->persist($cardEntity);
        $this->em->flush();

        return $cardEntity->getId();
    }
}
