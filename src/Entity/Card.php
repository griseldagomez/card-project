<?php

namespace App\Entity;

use App\Repository\CardRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ShadowC\AdminBundle\Attribute\ListField;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CardRepository::class)]
class Card
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[ListField(sortable: true, searchable: true)]
    #[Assert\NotNull]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[ListField(sortable: true, searchable: true)]
    #[Assert\NotNull]
    private ?string $job = null;

    #[ORM\Column(length: 255)]
    #[Assert\Url]
    private ?string $github_url = null;

    #[ORM\Column(length: 255)]
    #[Assert\Url]
    private ?string $linkedin_url = null;

    #[ORM\Column(length: 255)]
    #[Assert\Email]
    private ?string $email = null;

    #[ORM\Column(length: 40)]
    #[Assert\NotNull]
    private ?string $phone = null;

    #[ORM\Column(length: 6)]
    #[Assert\NotNull]
    private ?string $color_scheme = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotNull]
    private ?string $photo = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGithubUrl(): ?string
    {
        return $this->github_url;
    }

    public function setGithubUrl(string $github_url): static
    {
        $this->github_url = $github_url;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getColorScheme(): ?string
    {
        return $this->color_scheme;
    }

    public function setColorScheme(string $color_scheme): static
    {
        $this->color_scheme = $color_scheme;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): static
    {
        $this->photo = $photo;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getJob(): ?string
    {
        return $this->job;
    }

    public function setJob(?string $job): static
    {
        $this->job = $job;

        return $this;
    }

    public function getLinkedinUrl(): ?string
    {
        return $this->linkedin_url;
    }

    public function setLinkedinUrl(?string $linkedin_url): static
    {
        $this->linkedin_url = $linkedin_url;

        return $this;
    }
}
